const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("home", { title: "테스트 게시판,", message: "Hello!" });
});

app.get("/write", (req, res) => {
  res.render("write", { title: "테스트" });
});

app.listen(3000);