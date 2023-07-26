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
const handlebars = require("express-handlebars");
const app = express();

const mongodbConnection = require("./configs/mongodb-connection");

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("home", { title: "테스트 게시판", message: "Nice to meet ya" });
});

app.get("/write", (req, res) => {
  res.render("write", { title: "테스트 게시판" });
});

app.get("/detail/:id", (req, res) => {
  res.render("detail", { title: "테스트 게시판" });
});

let collection;

app.listen(3000, async () => {
  console.log("Server started");
  const mongoClient = await mongodbConnection();
  collection = mongoClient.db().collection("post");
  console.log("MongoDB connected");
});
