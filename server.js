const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercise", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(express.Router("./routes/api.js"));

app.post("/submit", ({ body }, res) => {
  User.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);
// require("./routes/statsRoute.js")(app);