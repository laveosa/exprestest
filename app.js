const dotenv = require("dotenv").config();
const fs = require("fs");
const path = require("path");
const http = require("http");
const ejs = require("ejs");
const static = require("node-static");

const Config = require("./app/server/classes/Config");

const PORT = process.env.PORT || 3000;
const myConfig = new Config();
let file = new static.Server("./app/client");

http
  .createServer((req, res) => {
    myConfig.setEventListeners(req, res, file);

    if (req.url === "/") {
      res.writeHead(302, {
        Location: "/home"
      });
      res.end();
    }

    if (req.url === "/home") {
      let contentType = myConfig.getContentType(req);

      res.writeHead(200, {
        "Content-Type": contentType
      });

      ejs.renderFile("./app/server/views/home.ejs", {}, (err, data) => {
        if (err) throw err;

        res.end(data);
      });
    }
  })
  .listen(PORT, err => {});
