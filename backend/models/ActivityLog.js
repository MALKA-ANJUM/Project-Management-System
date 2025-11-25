const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Task = require("./Task");
const User = require("./User");

const ActivityLog = sequelize.define("ActivityLog", {
  action: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

// Relationships
ActivityLog.belongsTo(Task, { foreignKey: "task_id" });
Task.hasMany(ActivityLog, { foreignKey: "task_id" });

ActivityLog.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(ActivityLog, { foreignKey: "user_id" });

module.exports = ActivityLog;
