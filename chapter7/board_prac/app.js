/* const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/vies");

app.get("/", (req, res) => {
  res.render("home", { title: "Hi", message: "Nice to meet you"})
});

app.listen(3000); */

const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("home", { title: "HI", message: "Hello" });
});

app.listen(3000);
