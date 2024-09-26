// Here is where we import modules
// We begin by loading Express
const express = require("express");
const dotenv = require("dotenv"); // require package
dotenv.config(); // Loads the environment variables from .env file
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
});
  
app.listen(3000, () => {
  console.log("In the year 3000");
});