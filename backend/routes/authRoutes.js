// backend/routes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// =======================
// Register
// =======================
router.post("/register", async (req, res) => {
  console.log("🔥 REGISTER ROUTE HIT");
  console.log("BODY:", req.body);

  try {
    const user = new User(req.body);
    await user.save();

    user.password = undefined; // don't send password back

    res.status(201).json({ message: "User created", user });
  } catch (err) {
    console.log("ERROR:", err);
    res.status(400).json({ error: err.message });
  }
});

// =======================
// Login
// =======================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // 2️⃣ Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    user.password = undefined; // don't send password back
    const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET,
  { expiresIn: "7d" }
);

res.json({
  message: "Login successful",
  token
});

    // 3️⃣ Success
    res.json({ message: "Login successful", user });

  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// =======================
// Get all users (testing)
// =======================
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password"); // hide passwords
    res.json(users);
  } catch (err) {
    console.log("USERS ERROR:", err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;