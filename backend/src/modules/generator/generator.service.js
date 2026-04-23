const archetypes = require("./archetypes");
const calculatePaces = require("./paceCalculator");

const generateWeeklyTemplate = require("./weeklyTemplates");
const sessionTypes = require("./sessionTypes");

// 🔥 SINGLE WORKOUT (you already had this — unchanged)
exports.generateWorkout = (user, goal) => {
  const paces = calculatePaces(user);

  const archetype = archetypes[goal];

  if (!archetype) {
    throw new Error("Invalid goal type");
  }

  return {
    warmup: archetype.warmup(),
    mainSet: archetype.mainSet(paces[goal]),
    cooldown: archetype.cooldown()
  };
};

// 🔥 WEEKLY GENERATOR (FIXED VERSION)
exports.generateWeek = (user) => {
  const template = generateWeeklyTemplate(user);

  const result = {};

  for (const day in template) {
    result[day] = template[day].map((type) => {
      if (!sessionTypes[type]) {
        throw new Error(`Unknown session type: ${type}`);
      }
      return sessionTypes[type](user);
    });
  }

  return result;
};
