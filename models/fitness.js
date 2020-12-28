const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout"
  },
  value: {
    type: Number,
    required: "Enter a distance"
  },
  value: {
    type: Number,
    required: "Enter a duration"
  },
  date: {
    type: Date,
    default: Date.now
  }
  
});

const fitness = mongoose.model("fitness", exerciseSchema);

module.exports = fitness;