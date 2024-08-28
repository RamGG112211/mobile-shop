// utils/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.Promise = global.Promise;

    await mongoose.connect("mongodb+srv://clownlaugh100:thapa@cluster0.3p1a43j.mongodb.net/mobile-shop?retryWrites=true&w=majority&appName=Cluster0", {
    
    });

    console.log('MongoDB Connection Succeeded.');
  } catch (err) {
    console.error('Error in DB connection: ' + err.message);
    process.exit(1); // Exit the process with failure code
  }
};

module.exports = connectDB;
