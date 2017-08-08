var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var animals = ["pig", "dog", "cat"];
var sounds = {
  pig: "oink",
  dog: "woof! woof!",
  cat: "meow"
};

app.get("/", function(request, response) {
  response.render("index");
  // response.send("Hi there, Welcome to my Home Page...");
});

app.get("/speak", function(req, res) {
  res.render("speak");
});

app.get("/speak/animal", function(request, response) {
  // var animal = request.params.animal;
  response.render("animal", {animals: animals, sounds: sounds});
});

app.post("/newanimal", function(req, res) {
  var newanimal = req.body.newanimal;
  var newsound = req.body.newsound; 
  
  var animal = animals.push(newanimal);
  sounds[newanimal] = newsound;
  //console.log(sounds);
  // console.log(req.body.newanimal);
  
  res.redirect("/speak/animal");
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