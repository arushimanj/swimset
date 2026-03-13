const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Auth routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("SwimSet API running");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch(err => console.error(err));
