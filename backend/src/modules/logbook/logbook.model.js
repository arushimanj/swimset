const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true
  },
  event: {
    type: String,
    required: true
  },
  time: {
    type: Number, // store in seconds
    required: true
  },
  meet: {
    type: String
  },
  date: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Log", logSchema);
