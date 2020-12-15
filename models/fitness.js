const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

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

const Fitness = mongoose.model("Fitness", exerciseSchema);

module.exports = Fitness;