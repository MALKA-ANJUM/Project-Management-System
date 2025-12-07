const express = require("express");
const router = express.Router();
const auth = require("../middleware/authmiddleware");
const { getLogsByProject } = require("../controllers/ActivityLogController");

router.get("/:projectId", auth, getLogsByProject);

module.exports = router;