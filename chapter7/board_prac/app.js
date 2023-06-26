const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

/* const mongodbConnection = require("./configs/mongodb-connection"); */

const mongodbConnection = require("./configs/mongodb-connection");

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("home", { title: "테스트 게시판,", message: "Hello!" });
});

app.get("/write", (req, res) => {
  res.render("write", { title: "테스트" });
});

let collection;
app.listen(3000, async () => {
  console.log("Server Started");
  const MongoClient = await mongodbConnection();
  collection = mongoCient.db().collection("post");
  console.log("MongoDB connected");
});
