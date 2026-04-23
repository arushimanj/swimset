const Workout = require("./workout.model");
const parseTimeToSeconds = require("../../utils/timeParser");

// CREATE WORKOUT
exports.createWorkout = async (userId, data) => {
  // check existence of set
  const parsedSets = (data.sets || []).map((set) => ({
    ...set,
    time: parseTimeToSeconds(set.time)
  }));

  const workout = new Workout({
    ...data,
    userId,
    sets: parsedSets
  });

  await workout.save();
  return workout;
};

// GET ALL WORKOUTS (for user)
exports.getWorkouts = async (userId) => {
  return await Workout.find({ userId }).sort({ date: -1 });
};

// GET ONE WORKOUT
exports.getWorkoutById = async (userId, id) => {
  return await Workout.findOne({ _id: id, userId });
};

// DELETE WORKOUT
exports.deleteWorkout = async (userId, id) => {
  return await Workout.findOneAndDelete({ _id: id, userId });
};
