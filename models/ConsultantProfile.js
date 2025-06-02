const mongoose = require('mongoose');

const consultantProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fullName: String,
  skills: [String],
  domains: [String],
  experience: Number, // in years
  availability: { type: Boolean, default: true }
});

module.exports = mongoose.model('ConsultantProfile', consultantProfileSchema);
