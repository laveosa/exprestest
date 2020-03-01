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
let contentType = "text/html";
let model = {
  nav: {
    url: null
  }
};

http
  .createServer((req, res) => {
    myConfig.addStaticFiles(req, res, file);

    if (req.url === "/") {
      res.writeHead(302, {
        Location: "/home"
      });
      res.end();
    }

    if (req.url === "/home") {
      contentType = myConfig.getContentType(req);

      res.writeHead(200, {
        "Content-Type": contentType
      });

      model.nav.url = "/home";

      ejs.renderFile("./app/server/views/home.ejs", model, (err, data) => {
        if (err) throw err;

        res.end(data);
      });
    }

    if (req.url === "/file-tree") {
      contentType = myConfig.getContentType(req);

      res.writeHead(200, {
        "Content-Type": contentType
      });

      model.nav.url = "/file-tree";

      ejs.renderFile("./app/server/views/file-tree.ejs", model, (err, data) => {
        res.end(data);
      });
    }

    if (req.url === "/log") {
      contentType = myConfig.getContentType(req);

      res.writeHead(200, {
        "Content-Type": contentType
      });

      model.nav.url = "/log";

      ejs.renderFile("./app/server/views/log.ejs", model, (err, data) => {
        res.end(data);
      });
    }
  })
  .listen(PORT, err => {});
