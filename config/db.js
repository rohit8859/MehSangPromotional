const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.warn('⚠️  MONGO_URI not set. Skipping MongoDB connection.');
      return null;
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // keep defaults; application can add options here if needed
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Error: ${error.message}`);
    console.error('The backend will continue running but database functionality will be unavailable.');
    // Do not exit process: allow server to run for local development when DB is unreachable.
    return null;
  }
};

module.exports = connectDB;
