const express = require('express');
const { requestOTP, verifyOTP } = require('../controllers/authController');
const router = express.Router();

// Test route to verify auth routes work
router.get('/test', (req, res) => {
  res.json({ 
    success: true,
    message: 'Auth route is working!' 
  });
});

// Route to request OTP
router.post('/request-otp', requestOTP);

// Route to verify OTP
router.post('/verify-otp', verifyOTP);

module.exports = router;
