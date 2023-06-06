/* const http = require("http");
const url = require("url"); // ❶
http
  .createServer((req, res) => {
    const path = url.parse(req.url, true).pathname; // ❷
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    if (path === "/user") {
      res.end("[user] name : andy, age: 30"); // ❸
    } else if (path === "/feed") {
      res.end(`<meta charset="UTF-8"><ul>
            <li>picture1</li>
            <li>picture2</li>
            <li>picture3</li>
          </ul>허동혁바보 히히히히히 벅벅이 라우터를 만들어보자 키키키 라우터를 만들자 메롱메롱 헬로우 라우터 초딩6살 허동혁 메롱메롱 300000000억
      `); // ➍
    } else {
      res.statusCode = 404;
      res.end("404 page not found"); // ➎
    }
  })
  .listen("3000", () => console.log("라우터를 만들어보자!"));
 */

const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");

    if (path === "/user") {
      res.end("[user] name : andy, age : 30");
    } else if (path === "/feed") {
      res.end(`<ul>
          <li>picture1</li>
          <li>picture2</li>
          <li>허동혁바보 히히히히히 벅벅이 라우터를 만들어보자 키키키 라우터를 만들자 메롱메롱 헬로우 라우터 초딩6살 허동혁 메롱메롱 300000000억</li>
          </ul>`);
    } else {
      res.statusCode = 404;
      res.end("404 page not found");
    }
  })
  .listen("3000", () => console.log("라우터 만들자!"));
