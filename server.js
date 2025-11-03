const express = require("express");
const connectDB = require("./src/config/db");

const userRoute = require("./src/routes/user");

const port = 7000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "server is running" });
});


connectDB()

app.use("/api", userRoute);

app.listen(port, (req, res) => {
  console.log("server is running on port no.", port);
});
