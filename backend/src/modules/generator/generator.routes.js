const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();

const controller = require("./generator.controller");
const authMiddleware = require("../../middleware/authMiddleware");

router.use(authMiddleware);

router.post("/workout", controller.generateWorkout);

module.exports = router;
router.post("/week", auth, controller.generateWeek);
