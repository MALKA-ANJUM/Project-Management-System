const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");
const ProjectMembers = require("./ProjectMembers");

const Project = sequelize.define("Project", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
  },

  start_date: {
    type: DataTypes.DATE,
  },

  end_date: {
    type: DataTypes.DATE,
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});

// ================== ASSOCIATIONS ==================

// Creator (One-to-Many)
Project.belongsTo(User, {
  foreignKey: "created_by",
  as: "creator",
});

User.hasMany(Project, {
  foreignKey: "created_by",
  as: "createdProjects",
});

// Team members (Many-to-Many)
Project.belongsToMany(User, {
  through: ProjectMembers,
  foreignKey: "project_id",
  otherKey: "user_id",
  as: "members",
});

User.belongsToMany(Project, {
  through: ProjectMembers,
  foreignKey: "user_id",
  otherKey: "project_id",
  as: "projects",
});

module.exports = Project;
