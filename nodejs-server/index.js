const express = require("express");

const app = express();

//route handler
app.get("/", (req, res) => {
  res.send("Hi there");
});

// listening to the server
app.listen(8000, () => {
  console.log("Listening on port 8000");
});
