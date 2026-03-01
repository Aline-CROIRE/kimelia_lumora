const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Import our User model
const router = express.Router();

// SIGN UP ROUTE
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User with this email already exists!" });
    }

    // 2. Hash the password (security)
    const hashedPassword = await bcrypt.hash(password, 8);

    // 3. Save user to database
    let user = new User({
      name,
      email,
      password: hashedPassword,
    });
    user = await user.save();

    res.json(user); // Send back the user data (minus sensitive info in a real app)
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;