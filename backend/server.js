const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('API is running');
});
app.use("/api/auth", require("./routes/authRoutes"));

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

