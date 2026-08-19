const express = require('express');
const {
  listServices,
  getServiceById,
  createServiceApplication,
  listApplications,
} = require('../controllers/serviceController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, listServices);
router.get('/:id', authMiddleware, getServiceById);
router.post('/apply', authMiddleware, createServiceApplication);
router.get('/applications', authMiddleware, listApplications);

module.exports = router;
