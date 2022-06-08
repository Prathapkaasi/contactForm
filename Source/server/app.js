const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

const userRouter = require("./routes/userRoutes");
app.use("/api/v1/users", userRouter);

module.exports = app;
