const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Task = require("./Task");
const User = require("./User");

const TaskComment = sequelize.define("TaskComment", {
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
});

// Relationships
TaskComment.belongsTo(Task, { foreignKey: "task_id" });
Task.hasMany(TaskComment, { foreignKey: "task_id" });

TaskComment.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(TaskComment, { foreignKey: "user_id" });

module.exports = TaskComment;
