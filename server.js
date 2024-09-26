// Here is where we import modules
// We begin by loading Express
const express = require("express");
const dotenv = require("dotenv"); // require package
dotenv.config(); // Loads the environment variables from .env file
const app = express();
const mongoose = require("mongoose");
// Import the Fruit model (this determines the model name if not specified)
const Fruit = require("./models/fruit.js");

//express url encoded parsing middleware for forms.
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
});

// GET /fruits/new
app.get("/fruits/new", (req, res) => {
    res.render("fruits/new.ejs");
});

// POST /fruits
app.post("/fruits", async (req, res) => {
    //if/else translates html on/off to true/false
    if (req.body.isReadyToEat === "on") {
        req.body.isReadyToEat = true;
    } else {
        req.body.isReadyToEat = false;
    }
    //creates an entry into our DB.
      await Fruit.create(req.body);
    res.redirect("/fruits/new");
});

// GET /fruits
app.get("/fruits", async (req, res) => {
    const allFruits = await Fruit.find();
    res.render("fruits/index.ejs", { fruits: allFruits });
});
  
  
  

  

app.listen(3000, () => {
  console.log("In the year 3000");
});