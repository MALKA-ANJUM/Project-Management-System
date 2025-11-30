const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");
const Project = require("./Project");

const ProjectMembers = sequelize.define("ProjectMembers", {});

// Many-to-Many Relationship
Project.belongsToMany(User, {
  through: ProjectMembers,
  foreignKey: "project_id",
});

User.belongsToMany(Project, {
  through: ProjectMembers,
  foreignKey: "user_id",
});

module.exports = ProjectMembers;
