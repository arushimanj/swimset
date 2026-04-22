require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = 5000;

// Connect DB then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
