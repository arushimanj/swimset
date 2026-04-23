module.exports = function buildWeeklyDistribution(sessionsPerWeek) {
  const counts = {
    technique: Math.round(sessionsPerWeek * 0.2),
    aerobic: Math.round(sessionsPerWeek * 0.2),
    sprint: Math.round(sessionsPerWeek * 0.4)
  };

  const used = counts.technique + counts.aerobic + counts.sprint;
  counts.mixed = sessionsPerWeek - used;

  return counts;
};
