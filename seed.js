require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Admin = require('./models/Admin');
const Pricing = require('./models/Pricing');

const DEFAULT_PACKAGES = [
  {
    name: 'Basic Mehndi Package',
    price: 499,
    description: 'Simple, elegant designs perfect for light celebrations, kids, or lightweight guest requirements.',
    features: [
      'Both palms beautiful designs',
      'Stately modern or traditional mandala motif',
      'Organic dark-staining henna',
      'After-care instructions sheet',
      'Application time: ~20 mins'
    ],
    order: 1
  },
  {
    name: 'Festival Package',
    price: 999,
    description: 'Perfect for celebrations like Eid, Diwali, Teej, and beautiful Karwa Chauth rituals.',
    features: [
      'Full hands (palms & back of hand) to wrists',
      'Choice of Arabic, Traditional or Modern motifs',
      'Includes fresh homemade aromatic organic henna cone',
      'Beautiful finger lace details',
      'Free henna protection oil bottle'
    ],
    isPopular: true,
    badge: 'Festive Favorite',
    order: 2
  },
  {
    name: 'Engagement Package',
    price: 2499,
    description: 'Premium stylish mehndi designed intricately to blend tradition with your hand jewelry look.',
    features: [
      'Heavy royal patterns up to mid-forearm (front & back)',
      'Choice of personalized motifs (love logo, dates)',
      'Symmetrical lace wrist cuffs',
      'Scented premium essential oil blends',
      'Application time: ~1.5 hours'
    ],
    order: 3
  },
  {
    name: 'Bridal Package',
    price: 4999,
    description: 'Ultimate luxury bespoke experience covering hands and legs for your grand wedding.',
    features: [
      'Bespoke high-density patterns up to elbow length',
      'Custom bride & groom portrait portraits',
      'Bridal legs and feet custom matching designs',
      'Private pre-consultation session & pattern selection',
      'Full bridal care pack (oil, sugar mix, sealant)',
      'Dedicated senior artist on-site guidance'
    ],
    badge: 'Elite Bridal',
    order: 4
  }
];

async function seed() {
  await connectDB();

  // Seed admin
  const existingAdmin = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
  if (!existingAdmin) {
    await Admin.create({
      email: process.env.ADMIN_EMAIL || 'admin@mehsang.com',
      password: process.env.ADMIN_PASSWORD || 'admin123',
      name: 'MehSang Admin'
    });
    console.log('✅ Admin user created');
  } else {
    console.log('ℹ️  Admin already exists');
  }

  // Seed pricing
  const existingPricing = await Pricing.countDocuments();
  if (existingPricing === 0) {
    await Pricing.insertMany(DEFAULT_PACKAGES);
    console.log('✅ Pricing packages seeded');
  } else {
    console.log('ℹ️  Pricing already seeded');
  }

  console.log('🌱 Seed complete!');
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
