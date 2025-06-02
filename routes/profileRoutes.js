const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const ClientProfile = require('../models/ClientProfile');
const ConsultantProfile = require('../models/ConsultantProfile');

// Create/Update Client Profile
router.post('/client', authMiddleware, async (req, res) => {
  try {
    const profile = await ClientProfile.findOneAndUpdate(
      { user: req.user.userId },
      req.body,
      { new: true, upsert: true }
    );
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create/Update Consultant Profile
router.post('/consultant', authMiddleware, async (req, res) => {
  try {
    const profile = await ConsultantProfile.findOneAndUpdate(
      { user: req.user.userId },
      req.body,
      { new: true, upsert: true }
    );
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
