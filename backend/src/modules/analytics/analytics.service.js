const mongoose = require("mongoose");
const Workout = require("../workouts/workout.model");

exports.getWeeklyVolume = async (userId) => {
  return await Workout.aggregate([
    {
      $match: {
        userId: new mongoose.Types.ObjectId(userId)
      }
    },
    {
      $addFields: {
        totalDistance: {
          $sum: "$sets.distance"
        }
      }
    },
    {
      $group: {
        _id: {
          year: { $year: "$date" },
          week: { $week: "$date" }
        },
        totalDistance: { $sum: "$totalDistance" }
      }
    },
    {
      $sort: { "_id.year": 1, "_id.week": 1 }
    }
  ]);
};

exports.getPaceTrends = async (userId) => {
  return await Workout.aggregate([
    {
      $match: {
        userId: new mongoose.Types.ObjectId(userId)
      }
    },
    {
      $unwind: "$sets"
    },
    {
      $addFields: {
        pace: {
          $divide: [
            { $toDouble: "$sets.time" },
            "$sets.distance"
          ]
        }
      }
    },
    {
      $group: {
        _id: "$date",
        avgPace: { $avg: "$pace" }
      }
    },
    {
      $sort: { _id: 1 }
    }
  ]);
};
