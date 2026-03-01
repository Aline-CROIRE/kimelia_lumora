const express = require('express');
const mongoose = require('mongoose'); // Import mongoose
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGODB_URI; // Get URI from .env

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(DB_URI)
    .then(() => console.log('✅ Connected to MongoDB Atlas'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Test Route
app.get('/', (req, res) => {
    res.send('Kimelia Lumora API is live!');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});