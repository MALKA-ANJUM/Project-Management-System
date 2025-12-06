const express = require("express");
const router = express.Router();
const auth = require("../middleware/authmiddleware");
const { createTasks, getTaskByProject, updatetask, deleteTask } = require("../controllers/taskController");

router.post("/", auth, createTasks);
router.get("/", auth, getTaskByProject);
router.put("/", auth, updatetask);
router.delete("/", auth, deleteTask);

module.exports = router;