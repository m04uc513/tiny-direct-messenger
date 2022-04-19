// server.js
// where your node app starts

// init project
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/public/index.html`);
});

app.post("/echoback", async function(request, response) {
  response.send({
    message: "success",
    response: request.body
  }); 
});


// Web API
const db = require("./messagedb.js");
db.init("./.data/scenario.db");

/*
// getUser
app.post("/getUser", async function(reqest, response) {
  console.log("# /getUser");
  var name = reqest.body.name;
  console.log("name: "+name);
  var id = await db.getUser(name);
  response.send({
    message: "success",
    reqest: name,
    response: id
  });
});

// addUser
app.post("/addUser", async function(reqest, response) {
  console.log("# /addUser");
  var name = reqest.body.name;
  var type = reqest.body.type;
  var id = await db.addUser(name, type);
  var msg;
  if (id < 0) {
    msg = "error";
  } else {
    msg = "success";
  }
  response.send({
    message: msg,
    reqest: { name: name, type: type },
    response: id
  });
});

// delUser
app.post("/delUser", async function(reqest, response) {
  console.log("# /delUser");
  var name = reqest.body.name;
  console.log("name: "+name);
  var id = await db.delUser(name);
  response.send({
    message: "success",
    reqest: name,
    response: id
  });
});
*/

// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
