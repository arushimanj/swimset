const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  poolLength: Number,
  notes: String,
  sets: [
    {
      distance: Number,
      stroke: String,
      interval: String,
      time: Number,
      rest: Number
    }
  ]
});

module.exports = mongoose.model("Workout", workoutSchema);
