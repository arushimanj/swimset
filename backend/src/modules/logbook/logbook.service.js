const Log = require("./logbook.model");

exports.addEntry = async (userId, data) => {
  const entry = new Log({
    ...data,
    userId
  });

  return await entry.save();
};

exports.getEntries = async (userId) => {
  return await Log.find({ userId }).sort({ date: 1 });
};
