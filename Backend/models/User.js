const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  details: { type: String },
  status: { type: String, enum: ['pending', 'approved', 'rejected', 'processing', 'completed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    phone: { type: String },
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
    applications: [applicationSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
