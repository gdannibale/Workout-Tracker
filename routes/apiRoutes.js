var db = require("../models/fitness.js");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/exercise", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/exercise", function(req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user

  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/exercise/:id", function(req, res) {

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/exercise", function(req, res) {

  });
};