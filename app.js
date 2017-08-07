var express = require("express");
var app = express();

app.get("/", function(request, response) {
  response.send("Hi there, Welcome to my Home Page...");
});

app.get("/speak/:animal", function(request, response) {
  // console.log(request.params);
  if(request.params.animal === "pig") {
    response.send("The " +request.params.animal +" says 'oink'!");
  } else if(request.params.animal === "dog") {
    response.send("The " +request.params.animal +" says 'Woof! Woof! '");
  } else if(request.params.animal === "cow") {
    response.send("The " +request.params.animal +" says 'Moo!'");
  } else {
    response.send("The " +request.params.animal +" says something!");
  }
});

app.get("/repeat/:something/:id", function(request, response) {
  var count = Number(request.params.id);
  var res = request.params.something;
  console.log(count);
  if(count > 0) {
    while(count >  1) {
      res += " "+request.params.something;
      count--;
    }
    response.send(" "+res);
  } else {
    response.send("There's nothing to repeat");
  }
});

app.get("*", function(request, response) {
  response.send("Sorry, page not found... What are you doing with your life?");
});


app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server started...");
});