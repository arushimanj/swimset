const generatorService = require("./generator.service");
const User = require("../auth/auth.model");

exports.generateWorkout = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    const { goal } = req.body;

    const workout = generatorService.generateWorkout(user, goal);

    res.json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.generateWeek = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    const week = generatorService.generateWeek(user);

    res.json(week);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
