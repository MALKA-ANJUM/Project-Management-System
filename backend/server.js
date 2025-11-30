const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/db");
const app = express();

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('API is running');
});
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

sequelize
  .authenticate()
  .then(() => console.log("MySQL connected"))
  .catch((err) => console.log("DB Error: ", err));

sequelize.sync().then(() => {
  console.log("Database synced");
});

