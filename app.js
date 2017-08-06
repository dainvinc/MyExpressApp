var express = require("express");
var app = express();

app.get("/", function(request, response) {
  response.send("Home");
});


app.get("/vishal", function(req, res) {
  res.send("Hello, Vishal...!");
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server has started...");
});
