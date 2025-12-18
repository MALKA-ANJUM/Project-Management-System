const Project = require("../models/Project");
const User = require("../models/User");
const ProjectMembers = require("../models/ProjectMembers.js");
const ActivityLog = require("../models/ActivityLog");

const createProject = async(req, res) => {
    try {
        const { title, description, start_date, end_date } = req.body;

        const project = await Project.create({
            title,
            description, 
            start_date,
            end_date,
            created_by: req.user.id,
        });
         // Automatically add creator as project member
        await project.addMember(req.user.id);

        // Log action
        await ActivityLog.create({
            project_id: project.id,
            user_id: req.user.id,
            action: `Created project ${title}`,
        });

        res.status(201).json({
            message: "Project Created Successfully!",
            project,
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};

const getUserProject = async (req, res) => {
    try {
        const userId = req.user.id;

        const projects = await Project.findAll({
            include : [
                {
                    model: User,
                     as: "members", // ✅ THIS LINE
                    attributes: ["id", "name", "email"],
                    through: {attributes: []},
                    where: { id: userId},
                },
            ],
        });

        res.json({ projects });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getProjectById = async (req, res) => {
  const project = await Project.findByPk(req.params.id, {
    include: [
      {
        model: User,
        as: "members",
        attributes: ["id", "name", "email"],
      },
    ],
  });

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  res.json(project);
};


const updateProject = async(req, res) => {
    try {
        const {projectId} = req.params;

        const project = await Project.findByPk(projectId);

        if(!project){
            return res.status(404).json({ message: "Project not found"});
        }
        
        await project.update(req.body);

        await ActivityLog.create({
            project_id: project.id,
            user_id: req.user.id,
            action: `Project updated ${project.title}`,
        });

        res.json({ message: "Project Updated", project});
    } catch (error) {
        res.status(500).json({ error: message.error });
    }
}

const deleteProject = async (req, res) => {
    try {
        const projectId = req.params;

        const project = await Project.findByPk(projectId);

        if(!project){
            return res.status(404).json({ message: "Project not found" });
        }
        await project.destroy();

        await ActivityLog.create({
            project_id: projectId,
            user_id: req.user.id,
            action: `Deleted Project ${project.title}`,
        });

        res.json({ message: "Project deleted successfully!"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const addMember = async(req, res) => {
    try {
        const { projectId } = req.params;
        const { userId } = req.body;

        const project = await Project.findByPk(projectId);
        const user = await User.findByPk(userId);

        if(!project || !user){
            return res.status(404).json({ message: "Project or User not found"});
        }

        await project.addMember(userId);

        await ActivityLog.create({
            project_id: projectId,
            user_id: userId,
            action: `Added User ${userId} to project`,
        });

        res.json({ message: "Member added successfully!"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const removeMember = async(req, res) => {
    try {
        const { projectId } = req.params;
        const { userId } = req.body;

        const project = await Project.findByPk(projectId);

        if(!project){
            res.status(404).json({ message: "project not found" });
        };

        await project.removeUser(userId);

        await ActivityLog.create({
            project_id: projectId,
            user_id: userId,
            action: `Removed User ${userId} from project`,
        });
        
        res.json({ message: "Member Removed Successfully"});
    } catch (error) {
        res.status(500).json({ error: message.error });
    }
}

module.exports = { createProject, getUserProject, updateProject, deleteProject ,addMember ,removeMember , getProjectById}
