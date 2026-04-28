const express = require("express");
const router = express.Router();
const controller = require("./logbook.controller");
const auth = require("../../middleware/authMiddleware");

// protect all routes
router.use(auth);

// POST /api/logbook
router.post("/", controller.addEntry);

// GET /api/logbook
router.get("/", controller.getEntries);

module.exports = router;
