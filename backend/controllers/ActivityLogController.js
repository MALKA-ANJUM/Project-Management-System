const ActivityLog = require("../models/ActivityLog");

const getLogsByProject = async (req, res) => {
    try {
        const logs = await ActivityLog.findAll({
            where: {project_id: req.params.projectId },
            include: ["User"],
            order: [["createdAt", "DESC"]],
        });

        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getLogsByProject }; 