const express = require("express");
const router = express.Router();

const controller = require("./generator.controller");
const authMiddleware = require("../../middleware/authMiddleware");

// apply auth to ALL routes in this file
router.use(authMiddleware);

// routes
router.post("/workout", controller.generateWorkout);
router.post("/week", controller.generateWeek);

module.exports = router;
