/* 
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://<user>:<password>@<atlashost>/board";

module.exports = function (callback) {
  return MongoClient.connect(uri, callback);
};
 */

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://idnosukja:ahdrhelql@cluster0.x9p1mqj.mongodb.net/test";

module.exports = function (callback) {
  return MongoClient.connect(uri, callback);
};
