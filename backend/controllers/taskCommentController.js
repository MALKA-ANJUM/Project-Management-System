const TaskComment = require("../models/TaskComment");
const ActivityLog = require("../models/ActivityLog");

const addComment = async (req, res) => {
    try {
        const { task_id, comment } = req.body;

        const newComment = await TaskComment.create({
            task_id,
            user_id: req.user.id,
            comment,
        });

        await ActivityLog.create({
            action: "Added a comment",
            task_id,
            user_id: req.user.id,
        });

        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCommentsByTask = async (req, res) => {
    try {
        const comments = await TaskComment.findAll({
            where: {task_id: req.params.taskId },
            include: ["User"],
        });

        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { addComment, getCommentsByTask };