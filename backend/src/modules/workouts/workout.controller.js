const workoutService = require("./workout.service");

// CREATE
exports.createWorkout = async (req, res) => {
  try {
    const workout = await workoutService.createWorkout(
      req.userId,
      req.body
    );
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET ALL
exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await workoutService.getWorkouts(req.userId);
    res.json(workouts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET ONE
exports.getWorkoutById = async (req, res) => {
  try {
    const workout = await workoutService.getWorkoutById(
      req.userId,
      req.params.id
    );

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteWorkout = async (req, res) => {
  try {
    const workout = await workoutService.deleteWorkout(
      req.userId,
      req.params.id
    );

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.json({ message: "Workout deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
