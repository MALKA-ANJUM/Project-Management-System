const sequelize = require("../config/db");
const { DataTypes} = require("sequelize");
const Project = require("../models/Project");
const Task = require("../models/Task");
const User = require("../models/User");


const ActivityLog = sequelize.define("ActivityLog", {
  action: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Project log
ActivityLog.belongsTo(Project, { foreignKey: "project_id" });
Project.hasMany(ActivityLog, { foreignKey: "project_id" });

// Task log (optional)
ActivityLog.belongsTo(Task, { foreignKey: "task_id" });
Task.hasMany(ActivityLog, { foreignKey: "task_id" });

// Performed by user
ActivityLog.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(ActivityLog, { foreignKey: "user_id" });

module.exports = ActivityLog;