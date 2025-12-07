const Task = require("../models/Task");
const project = require("../models/Project");
const User = require("../models/User");
const ActivityLog = require("../models/ActivityLog");

const createTasks = async(req, res) => {
    try {
        const { project_id, title, description, assigned_to, due_date, priority } = req.body;

        const project = await Project.findByPk(project_id);
        if(!project){
            return res.status(404).json({ message: "Project not found"});
        };

        const task = await Task.create({
            project_id,
            title,
            description,
            assigned_to,
            due_date,
            priority,
            created_by: req.user.id,
        });

        await ActivityLog.create({
            action: "Task created",
            task_id: task.id,
            user_id: req.user.id,
            project_id: project.id,
        });

        res.status(201).json({message: "Task created successfully", task});
    } catch (error) {
        res.json(500).json({ error: error.message });
    }
}

// get-task
const getTaskByProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        
        const tasks = await Task.findAll({
            where: { project_id: projectId },
            include: [
                {
                    model: User, attributes: ["id", "name"], as :"creator"
                },
                {
                    model: User, attributes: ["id", "name"], as: "assigned_to"
                },
            ]
        });

        res.json({ tasks });
    } catch (error) {
        res.status(500).message(error => error.message);
    }
}

const updatetask = async(req, res) => {
    try {
        const { taskId } = req.params;
        const task = Task.findByPk(taskId);

        if(!task){
            res.status(404).json({ message: "Task not found!"});
        }

        await task.update(req.body);
        res.status(200).json({ message: "Task Updated!" });
    } catch (error) {
        res.status(500).json({ error: message.error });
    }
}

const deleteTask = async(req, res) => {
    try {
        const { taskId } = req.params;
        const task = await Task.findByPk(taskId);

        if(!task){
            return res.status(404).json({ message: "Task not found!" });
        }

        await task.destroy();
        await ActivityLog.create({
            action: "Task Deleted",
            task_id: task.id,
            user_id: req.user.id,
            project_id: project.id,
        });
        res.json({ message: "Task deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: message.error });
    }
}

module.exports = { createTasks, getTaskByProject, updatetask, deleteTask };