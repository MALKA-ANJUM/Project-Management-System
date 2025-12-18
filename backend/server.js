const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/db");
const app = express();

/* ✅ LOAD MODELS (IMPORTANT) */
require("./models/User");
require("./models/Project");
require("./models/ProjectMembers");
require("./models/Task");
require("./models/TaskComment");
require("./models/ActivityLog");

/* Routes */
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");
const taskCommentRoutes = require("./routes/taskCommentRoutes");
const activityLogRoutes = require("./routes/activityLogRoutes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running");
});

/* API Routes */
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/comments", taskCommentRoutes);
app.use("/api/activity-logs", activityLogRoutes);

/* DB Connection */
sequelize
  .authenticate()
  .then(() => console.log("MySQL connected"))
  .catch((err) => console.log("DB Error:", err));

sequelize.sync().then(() => {
  console.log("Database synced");
});

/* Start Server */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
