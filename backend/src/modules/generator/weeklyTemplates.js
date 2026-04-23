const buildDistribution = require("./distribution");

module.exports = function generateWeeklyTemplate(user) {
  const sessions = user.sessionsPerWeek || 6;

  const dist = buildDistribution(sessions);

  const week = [];

  // fill week array
  week.push(...Array(dist.technique).fill("technique"));
  week.push(...Array(dist.aerobic).fill("aerobic"));
  week.push(...Array(dist.sprint).fill("sprint"));
  week.push(...Array(dist.mixed).fill("mixed"));

  // simple shuffle (randomize order)
  return week.sort(() => Math.random() - 0.5);
};
