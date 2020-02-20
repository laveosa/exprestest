const dotenv = require("dotenv").config();
const uuid = require("uuid");
const http = require("http");

const PORT = process.env.PORT;

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("./app/index.html");
    }
  })
  .listen(PORT);
