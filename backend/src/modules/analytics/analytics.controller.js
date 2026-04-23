const analyticsService = require("./analytics.service");

exports.getWeeklyVolume = async (req, res) => {
  try {
    const data = await analyticsService.getWeeklyVolume(req.userId);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPaceTrends = async (req, res) => {
  try {
    const data = await analyticsService.getPaceTrends(req.userId);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
