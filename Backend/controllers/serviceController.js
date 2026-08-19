const Service = require('../models/Service');
const User = require('../models/User');

const listServices = async (req, res) => {
  const services = await Service.find().sort({ title: 1 });
  res.json({ services });
};

const getServiceById = async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    return res.status(404).json({ error: 'Service not found' });
  }
  res.json({ service });
};

const createServiceApplication = async (req, res) => {
  const { serviceId, details } = req.body;
  if (!serviceId) {
    return res.status(400).json({ error: 'Service ID is required' });
  }

  const service = await Service.findById(serviceId);
  if (!service) {
    return res.status(404).json({ error: 'Service not found' });
  }

  req.user.applications.push({
    service: service._id,
    details,
    status: 'pending',
  });
  await req.user.save();

  res.status(201).json({ message: 'Application submitted', application: req.user.applications[req.user.applications.length - 1] });
};

const listApplications = async (req, res) => {
  await req.user.populate('applications.service');
  res.json({ applications: req.user.applications });
};

module.exports = { listServices, getServiceById, createServiceApplication, listApplications };
