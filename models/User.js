const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  isVerified: { type: Boolean, default: false },
  role: { type: String, enum: ['client', 'consultant'], required: true },
  otp: String,
  otpExpires: Date
});

module.exports = mongoose.model('User', userSchema);
