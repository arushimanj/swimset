const service = require("./logbook.service");

exports.addEntry = async (req, res) => {
  try {
    const entry = await service.addEntry(req.userId, req.body);
    res.json(entry);
  } catch (err) {
    console.log("LOGBOOK ERROR:", err);
    res.status(400).json({ error: err.message });
  }
};

exports.getEntries = async (req, res) => {
  try {
    const entries = await service.getEntries(req.userId);
    res.json(entries);
  } catch (err) {
    console.log("LOGBOOK FETCH ERROR:", err);
    res.status(400).json({ error: err.message });
  }
};
