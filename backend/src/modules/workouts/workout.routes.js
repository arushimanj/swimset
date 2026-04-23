const express = require("express");
const router = express.Router();

const controller = require("./workout.controller");
const authMiddleware = require("../../middleware/authMiddleware");

// ALL routes protected
router.use(authMiddleware);

router.post("/", controller.createWorkout);
router.get("/", controller.getWorkouts);
router.get("/:id", controller.getWorkoutById);
router.delete("/:id", controller.deleteWorkout);

module.exports = router;
