const express = require('express');
const { createPayment, confirmPayment, listPayments } = require('../controllers/paymentController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create-intent', authMiddleware, createPayment);
router.post('/confirm', authMiddleware, confirmPayment);
router.get('/history', authMiddleware, listPayments);

module.exports = router;
