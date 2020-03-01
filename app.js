const dotenv = require("dotenv").config();
const fs = require("fs");
const path = require("path");
const http = require("http");
const ejs = require("ejs");
const static = require("node-static");

const PORT = process.env.PORT || 3000;
var file = new static.Server("./app/client");

http
  .createServer((req, res) => {
    setEventListeners(req, res);

    if (req.url === "/") {
      res.writeHead(302, {
        Location: "/home"
      });
      res.end();
    }

    if (req.url === "/home") {
      let contentType = getContentType(req);

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

function getContentType(req) {
  let ext = path.extname(req.url);
  let contenType = "text/html";

  switch (ext) {
    case ".txt":
      contenType = "text/plain";
      break;
    case ".json":
      contenType = "aplication/json";
      break;
    case ".js":
      contenType = "text/javascript";
      break;
    case ".css":
      contenType = "text/css";
      break;
    case ".png":
      contenType = "image/png";
      break;
  }

  return contenType;
}

function setEventListeners(req, res) {
  req
    .addListener("end", function() {
      file.serve(req, res);
    })
    .resume();
}
