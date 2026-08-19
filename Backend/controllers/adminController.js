const User = require('../models/User');
const Advertisement = require('../models/Advertisement');
const Service = require('../models/Service');
const Payment = require('../models/Payment');

const getAdminDashboard = async (req, res) => {
  const totalUsers = await User.countDocuments();
  const totalServices = await Service.countDocuments();
  const activeAds = await Advertisement.countDocuments({ active: true });

  res.json({
    totalUsers,
    totalServices,
    activeAds,
  });
};

const listUsers = async (req, res) => {
  const users = await User.find().select('-password').sort({ createdAt: -1 });
  res.json({ users });
};

const listPayments = async (req, res) => {
  const payments = await Payment.find().populate('user', '-password').populate('service');
  res.json({ payments });
};

const createAdvertisement = async (req, res) => {
  const { title, imageUrl, startDate, endDate } = req.body;
  if (!title || !imageUrl || !startDate || !endDate) {
    return res.status(400).json({ error: 'Advertisement title, image URL, startDate and endDate are required' });
  }

  const ad = new Advertisement({ title, imageUrl, startDate, endDate, active: true });
  await ad.save();
  res.status(201).json({ advertisement: ad });
};

const listAdvertisements = async (req, res) => {
  const ads = await Advertisement.find().sort({ createdAt: -1 });
  res.json({ advertisements: ads });
};

module.exports = { getAdminDashboard, listUsers, createAdvertisement, listAdvertisements, listPayments };
