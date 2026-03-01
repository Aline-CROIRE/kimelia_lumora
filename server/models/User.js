const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  profilePic: { type: String, default: "" },
  role: { type: String, default: "user" }, // 'user' or 'admin'
  createdAt: { type: Date, default: Date.now }
});

// Create the Model from the Schema
const User = mongoose.model('User', userSchema);
module.exports = User;