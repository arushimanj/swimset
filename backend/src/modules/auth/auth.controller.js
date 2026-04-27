const authService = require("./auth.service");
const User = require("./auth.model");
// reggieee
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

// log in kiddos
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
// for the fancy profile!
exports.getMe = async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  res.json(user);
};