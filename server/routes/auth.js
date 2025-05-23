const express = require('express');
const router = express.Router();

// Temporary stub routes for testing
router.post('/register', (req, res) => {
  // Implement registration logic with bcrypt, JWT here later
  res.json({ message: "Register route hit" });
});

router.post('/login', (req, res) => {
  // Implement login logic here later
  res.json({ message: "Login route hit" });
});

module.exports = router;
