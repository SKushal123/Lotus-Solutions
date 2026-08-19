const Payment = require('../models/Payment');
const Service = require('../models/Service');
const { createPaymentIntent } = require('../services/paymentProvider');

const createPayment = async (req, res) => {
  const { serviceId, currency = 'USD' } = req.body;
  if (!serviceId) {
    return res.status(400).json({ error: 'Service ID is required' });
  }

  const service = await Service.findById(serviceId);
  if (!service) {
    return res.status(404).json({ error: 'Service not found' });
  }

  const paymentData = await createPaymentIntent({
    amount: service.price || 0,
    currency,
    description: `Payment for ${service.title}`,
    metadata: { userId: req.user._id.toString(), serviceId: service._id.toString() },
  });

  const payment = new Payment({
    user: req.user._id,
    service: service._id,
    amount: service.price || 0,
    currency,
    status: 'pending',
    provider: paymentData.provider,
    providerReference: paymentData.providerReference,
    metadata: { serviceTitle: service.title },
  });
  await payment.save();

  res.status(201).json({
    paymentId: payment._id,
    clientSecret: paymentData.clientSecret,
    provider: paymentData.provider,
    providerReference: paymentData.providerReference,
    status: paymentData.status,
  });
};

const confirmPayment = async (req, res) => {
  const { paymentId, providerReference, status } = req.body;
  if (!paymentId || !status) {
    return res.status(400).json({ error: 'paymentId and status are required' });
  }

  const payment = await Payment.findById(paymentId).populate('service');
  if (!payment) {
    return res.status(404).json({ error: 'Payment record not found' });
  }

  payment.status = status;
  payment.providerReference = providerReference || payment.providerReference;
  await payment.save();

  if (status === 'completed' && payment.service) {
    const hasApplication = req.user.applications.some((item) => item.service.toString() === payment.service._id.toString());
    if (!hasApplication) {
      req.user.applications.push({
        service: payment.service._id,
        details: `Auto-created after payment for ${payment.service.title}`,
        status: 'pending',
      });
      await req.user.save();
    }
  }

  res.json({ payment });
};

const listPayments = async (req, res) => {
  const payments = await Payment.find({ user: req.user._id }).populate('service');
  res.json({ payments });
};

module.exports = { createPayment, confirmPayment, listPayments };
