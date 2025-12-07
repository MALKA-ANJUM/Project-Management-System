const express = require("express");
const router = express.Router();
const auth = require("../middleware/authmiddleware");
const { addComment, getCommentsByTask } = require("../controllers/taskCommentController");

router.post("/", auth, addComment);
router.get("/:taskId", auth, getCommentsByTask);

module.exports = router;
