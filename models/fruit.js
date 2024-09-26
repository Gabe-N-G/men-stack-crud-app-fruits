// models/fruit.js

const mongoose = require('mongoose');

//longer version

const fruitSchema = new mongoose.Schema({
  name: String,
  isReadyToEat: Boolean,
});

const Fruit = mongoose.model("Fruit", fruitSchema); // create model

module.exports = Fruit;


//shorter version

// module.exports = mongoose.model("Fruit", new mongoose.Schema({
//     name: String,
//     isReadyToEat: Boolean,
// }))
