const Stripe = require('stripe');

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeClient = stripeSecretKey ? Stripe(stripeSecretKey) : null;

const createPaymentIntent = async ({ amount, currency = 'usd', description, metadata = {} }) => {
  const normalizedCurrency = currency.toLowerCase();
  const amountInCents = Math.round(amount * 100);

  if (stripeClient) {
    const paymentIntent = await stripeClient.paymentIntents.create({
      amount: amountInCents,
      currency: normalizedCurrency,
      metadata,
      description,
      payment_method_types: ['card'],
    });

    return {
      provider: 'stripe',
      providerReference: paymentIntent.id,
      clientSecret: paymentIntent.client_secret,
      status: paymentIntent.status,
    };
  }

  return {
    provider: 'mock',
    providerReference: `mock_${Date.now()}`,
    clientSecret: `mock_secret_${Date.now()}`,
    status: 'requires_payment_method',
  };
};

module.exports = { createPaymentIntent };
