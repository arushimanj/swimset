const express = require("express");
const router = express.Router();

const controller = require("./analytics.controller");
const authMiddleware = require("../../middleware/authMiddleware");

router.use(authMiddleware);

router.get("/weekly-volume", controller.getWeeklyVolume);

router.get("/pace-trends", controller.getPaceTrends);

module.exports = router;