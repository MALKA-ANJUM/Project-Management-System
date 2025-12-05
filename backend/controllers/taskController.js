const Task = require("../models/Task");
const project = require("../models/Project");
const User = require("../models/User");

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

        res.status(201).json({message: "Task created successfully", task});
    } catch (error) {
        res.json(500).json({ error: error.message });
    }
}
