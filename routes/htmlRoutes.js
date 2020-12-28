var path = require("path");
var express = require("express");
const app = express();

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // blog route loads blog.html
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  // app.post("/stats", function(req, res) {
  //   // Write code here to create a new todo and save it to the database
  //   // and then res.json back the new todo to the user

  // });
  // app.post("/api/stats", function(req, res) {
  //   console.log(req.body)
    

  // });

};

