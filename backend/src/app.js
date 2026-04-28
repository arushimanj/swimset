const express = require("express");
const cors = require("cors");

const authRoutes = require("./modules/auth/auth.routes");
const workoutRoutes = require("./modules/workouts/workout.routes");
const analyticsRoutes = require("./modules/analytics/analytics.routes");
const generatorRoutes = require("./modules/generator/generator.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/generator", generatorRoutes);
app.use("/api/logbook", require("./modules/logbook/logbook.routes"));
// Test route
app.get("/", (req, res) => {
  res.send("SwimSet API running");
});

module.exports = app;
