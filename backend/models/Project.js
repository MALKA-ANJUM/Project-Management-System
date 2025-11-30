const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

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
  }
});

// Relationship
// Many-to-Many relation: Project <-> Users (Team members)
Project.belongsTo(User, { foreignKey: "created_by" });
User.hasMany(Project, { foreignKey: "created_by" });

module.exports = Project;
