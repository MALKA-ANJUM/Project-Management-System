const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ProjectMembers = sequelize.define(
  "ProjectMembers",
  {},
  {
    tableName: "project_members",
    timestamps: false,
  }
);

module.exports = ProjectMembers;
