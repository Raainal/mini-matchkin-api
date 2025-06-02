const User = require('../models/User');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

// Configure your email transporter with your Gmail and app password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'crankychampion53@gmail.com',
    pass: 'wrmpwjzpbxonhexq'
  }
});

// Helper to generate a 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP to user's email
exports.requestOTP = async (req, res) => {
  const { email, role } = req.body; // <-- Accept role from request
  if (!email) return res.status(400).json({ success: false, message: 'Email is required' });
  if (!role) return res.status(400).json({ success: false, message: 'Role is required (client or consultant)' });

  const otp = generateOTP();
  const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // OTP valid for 10 minutes

  let user = await User.findOne({ email });
  if (!user) {
    user = new User({ email, role, otp, otpExpires }); // <-- Store role when creating new user
  } else {
    user.otp = otp;
    user.otpExpires = otpExpires;
    // Only set role if not already set
    if (!user.role) user.role = role;
  }
  await user.save();

  // Send email
  try {
    await transporter.sendMail({
      to: email,
      subject: 'Your OTP Code',
      html: `<h2>Your OTP is: ${otp}</h2>`
    });
    res.json({ success: true, message: 'OTP sent to email' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error sending email', error: error.message });
  }
};

// Verify OTP and issue JWT
exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ success: false, message: 'Email and OTP are required' });

  const user = await User.findOne({ email, otp });
  if (!user) return res.status(400).json({ success: false, message: 'Invalid OTP' });
  if (user.otpExpires < new Date()) return res.status(400).json({ success: false, message: 'OTP expired' });

  user.isVerified = true;
  user.otp = undefined;
  user.otpExpires = undefined;
  await user.save();

  // Generate JWT token
  const token = jwt.sign(
    { userId: user._id, email: user.email, role: user.role }, // <-- Include role in token if you want
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ success: true, message: 'OTP verified, user logged in', token });
};
