const express = require('express');
const {
  getAdminDashboard,
  listUsers,
  createAdvertisement,
  listAdvertisements,
  listPayments,
} = require('../controllers/adminController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/dashboard', authMiddleware, adminMiddleware, getAdminDashboard);
router.get('/users', authMiddleware, adminMiddleware, listUsers);
router.post('/advertisements', authMiddleware, adminMiddleware, createAdvertisement);
router.get('/advertisements', authMiddleware, adminMiddleware, listAdvertisements);
router.get('/payments', authMiddleware, adminMiddleware, listPayments);

module.exports = router;
