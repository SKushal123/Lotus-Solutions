require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Service = require('../models/Service');

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lotus_portal';
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to MongoDB for seeding');
};

const seedServices = async () => {
  const services = [
    { title: 'Health Insurance', description: 'Comprehensive health coverage plan', price: 99 },
    { title: 'Life Insurance', description: 'Life protection plan for your family', price: 149 },
    { title: 'Auto Insurance', description: 'Vehicle coverage and protection', price: 79 },
    { title: 'Home Insurance', description: 'Protect your home and valuables', price: 129 },
    { title: 'Travel Insurance', description: 'Coverage for international travel', price: 49 },
    { title: 'Pet Insurance', description: 'Medical coverage for your pets', price: 35 },
    { title: 'Disability Insurance', description: 'Income protection plan', price: 59 },
    { title: 'Critical Illness Insurance', description: 'Financial protection against critical illness', price: 89 },
    { title: 'Accident Insurance', description: 'Personal accident protection', price: 39 },
    { title: 'Dental Insurance', description: 'Dental treatment coverage', price: 29 },
    { title: 'Vision Insurance', description: 'Eye care and vision coverage', price: 25 },
    { title: 'Business Insurance', description: 'Comprehensive business protection', price: 299 },
    { title: 'Professional Liability', description: 'Coverage for professional services', price: 199 },
    { title: 'Cyber Insurance', description: 'Protection against cyber threats', price: 179 },
    { title: 'Directors & Officers Insurance', description: 'Executive liability protection', price: 249 },
    { title: 'Product Liability Insurance', description: 'Protection for product-related claims', price: 219 },
    { title: 'General Liability Insurance', description: 'Broad business liability coverage', price: 159 },
    { title: 'Employment Practices Liability', description: 'Coverage for employment-related claims', price: 189 },
    { title: 'Property Insurance', description: 'Commercial property coverage', price: 269 },
    { title: 'Equipment Breakdown Insurance', description: 'Coverage for equipment failures', price: 99 },
    { title: 'Fraud Protection Insurance', description: 'Protection against fraud and theft', price: 119 },
    { title: 'Directors Insurance', description: 'Personal protection for directors', price: 139 },
    { title: 'Fidelity Bond', description: 'Employee dishonesty coverage', price: 169 },
    { title: 'Supplier Liability Insurance', description: 'Liability from supplier issues', price: 129 },
    { title: 'Contingency Insurance', description: 'Coverage for contingent events', price: 149 },
    { title: 'Management Liability Insurance', description: 'Comprehensive management protection', price: 279 },
    { title: 'Renewable Energy Insurance', description: 'Coverage for renewable energy projects', price: 249 },
    { title: 'Marine Insurance', description: 'Coverage for maritime operations', price: 329 },
    { title: 'Aviation Insurance', description: 'Protection for aviation operations', price: 399 },
    { title: 'Event Cancellation Insurance', description: 'Coverage for cancelled events', price: 199 },
    { title: 'Financial Lines Insurance', description: 'Financial risk protection', price: 289 },
    { title: 'Broker Services', description: 'Professional brokerage services', price: 0 },
  ];

  try {
    const existingCount = await Service.countDocuments();
    if (existingCount === 0) {
      await Service.insertMany(services);
      console.log(`✓ Seeded ${services.length} services`);
    } else {
      console.log(`Services already exist (${existingCount} found), skipping service seed`);
    }
  } catch (error) {
    console.error('Error seeding services:', error.message);
  }
};

const seedAdminUser = async () => {
  try {
    const existingAdmin = await User.findOne({ email: 'admin@lotus.local', role: 'admin' });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('Admin@123', 10);
      const adminUser = new User({
        name: 'Admin User',
        email: 'admin@lotus.local',
        password: hashedPassword,
        phone: '+1 (555) 000-0000',
        role: 'admin',
      });
      await adminUser.save();
      console.log('✓ Admin user created');
      console.log('  Email: admin@lotus.local');
      console.log('  Password: Admin@123');
    } else {
      console.log('Admin user already exists, skipping');
    }
  } catch (error) {
    console.error('Error seeding admin user:', error.message);
  }
};

const seedDemoCustomer = async () => {
  try {
    const existingCustomer = await User.findOne({ email: 'customer@lotus.local', role: 'customer' });
    if (!existingCustomer) {
      const hashedPassword = await bcrypt.hash('Customer@123', 10);
      const customerUser = new User({
        name: 'Demo Customer',
        email: 'customer@lotus.local',
        password: hashedPassword,
        phone: '+1 (555) 111-1111',
        role: 'customer',
      });
      await customerUser.save();
      console.log('✓ Demo customer user created');
      console.log('  Email: customer@lotus.local');
      console.log('  Password: Customer@123');
    } else {
      console.log('Demo customer already exists, skipping');
    }
  } catch (error) {
    console.error('Error seeding demo customer:', error.message);
  }
};

const seed = async () => {
  try {
    await connectDB();
    console.log('\n--- Starting Database Seed ---\n');
    await seedAdminUser();
    await seedDemoCustomer();
    await seedServices();
    console.log('\n--- Seed Complete ---\n');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error.message);
    process.exit(1);
  }
};

seed();
