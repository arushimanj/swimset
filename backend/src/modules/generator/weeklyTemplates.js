module.exports = function generateWeeklyTemplate(user) {
  const phase = user.phase || "offSeason";

  if (phase === "offSeason") {
    return {
      monday: ["aerobic", "mixed"],
      tuesday: ["technique", "sprint"], // LT
      wednesday: ["recovery"],
      thursday: ["aerobic", "mixed"],
      friday: ["technique", "sprint"], // USRPT
      saturday: ["recovery"]
    };
  }

  if (phase === "taper") {
    return {
      monday: ["sprint"],
      tuesday: ["technique"],
      wednesday: ["sprint"],
      thursday: ["recovery"],
      friday: ["race"],
      saturday: ["recovery"]
    };
  }

  return {};
};
