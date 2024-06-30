const dotenv = require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const Task = require("./model/taskModel");
const taskRoutes = require("./router");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000", process.env.frontendURL] }));
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
