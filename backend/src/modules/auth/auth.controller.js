const authService = require("./auth.service");

// REGISTER
exports.register = async (req, res) => {
  try {
    const result = await authService.register(req.body);
    res.status(201).json(result);
  } catch (err) {
  console.log("🔥 FULL ERROR:", err);
  console.log("🔥 MESSAGE:", err.message);
  res.status(400).json({ error: err.message });
}
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const result = await authService.login(req.body);
    res.json(result);
  } catch (err) {
  console.log("🔥 FULL ERROR:", err);
  console.log("🔥 MESSAGE:", err.message);
  res.status(400).json({ error: err.message });
}
};
