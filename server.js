var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// tables array of objects
var tables = [{
	name: "Richard",
	phone: "770-777-9999",
	email: "richard@email.com",
	uniqueId: "The Phoenix"
},
{
	name: "Brice",
	phone: "770-999-7777",
	email: "brice@email.com",
	uniqueId: "Bricen"
},
{
	name: "Hajar",
	phone: "404-hah-ahah",
	email: "gigi@email.com",
	uniqueId: "Gigi"
}];

// array to hold the list of tables waitlisted
var waitlist = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/tables", function(req, res) {
  res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});


// Display all reserved tables
app.get("/api/:anyVar?", function(req, res) {
  var chosen = req.params.anyVar;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < tables.length; i++) {
      if (chosen === tables[i].routeName) {
        return res.json(tables[i]);
      }
    }

    return res.json(false);
  }
  return res.json(tables);
});

app.post("/api/new", function(req, res) {
  var newReservation = req.body;
  // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  if(tables.length < 5) {
  	tables.push(newReservation);
  } 
  else {
  	waitlist.push(newReservation);
  }

  res.json(newReservation);
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});