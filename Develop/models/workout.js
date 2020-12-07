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
    required: "Enter a time"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Exercise = mongoose.model("Workout", exerciseSchema);

module.exports = Exercise;