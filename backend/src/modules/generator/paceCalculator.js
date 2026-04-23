const calculatePaces = (user) => {
  // Example: assume PB for 100 of main stroke
  const pb100 = user.PBs?.get("100") || 60; // fallback

  const racePace50 = pb100 / 2;

  return {
    race: racePace50,
    threshold: racePace50 + 4,
    cv: racePace50 + 7,
    aerobic: racePace50 + 12
  };
};

module.exports = calculatePaces;
