require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const path = require("path");
const userRoute = require("./src/routes/user");
const adminRoute = require("./src/routes/adminRoute");

const port = 7000;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "images")));

app.get("/", (req, res) => {
  res.json({ message: "server is running" });
});

connectDB();

app.use("/api", userRoute);
app.use("/admin", adminRoute);

app.listen(port, (req, res) => {
  console.log("server is running on port no.", port);
});
