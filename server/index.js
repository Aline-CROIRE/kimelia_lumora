const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/auth");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();
const DB = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());
app.use(authRouter); // Note: The routes in auth.js already start with /api

// Connection
mongoose
  .connect(DB)
  .then(() => {
    console.log("✅ Connection Successful to MongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Connected at port ${PORT}`);
});