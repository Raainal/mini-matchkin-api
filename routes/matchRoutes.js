const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { findMatches } = require('../controllers/matchController'); // Import the controller

// Test route to verify match routes work
router.get('/test', (req, res) => {
  res.json({ 
    success: true,
    message: 'Match route is working!' 
  });
});

// Example protected route
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ 
    success: true,
    message: 'You accessed a protected route!',
    user: req.user
  });
});

// Matching endpoint - protected by JWT
router.post('/match', authMiddleware, findMatches);

module.exports = router;
