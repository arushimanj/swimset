const archetypes = require("./archetypes");
const calculatePaces = require("./paceCalculator");

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

const generateWeeklyTemplate = require("./weeklyTemplates");
const sessionTypes = require("./sessionTypes");

exports.generateWeek = (user) => {
  const template = generateWeeklyTemplate(user);

  return template.map((type) => {
    return sessionTypes[type](user);
  });
};
