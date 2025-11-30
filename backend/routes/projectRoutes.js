const express = require("express");
const router = express.Router();
const auth = require("../middleware/authmiddleware");

const { createProject, getUserProject, updateProject, deleteProject ,addMember ,removeMember } = require("../controllers/projectController");

router.post("/", auth, createProject);
router.get("/", auth, getUserProject);
router.put("/:projectId", auth, updateProject);
router.delete("/:projectId", auth, deleteProject);

router.post("/:projectId/add-member", auth, addMember);
router.post("/:projectId/remove-member", auth, removeMember);

module.exports = router;

