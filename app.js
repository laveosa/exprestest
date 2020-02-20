const dotenv = require("dotenv").config();
const http = require("http");
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");

const PORT = process.env.PORT || "3000";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader = { "Content-Type": "text/html" };

    fs.readFile(
      path.join(__dirname, "app/server/views/home.ejs"),
      "utf-8",
      (err, data) => {
        if (err) throw err;

        let model = {
          title: "EJS main page titile"
        };

        res.end(ejs.render(data, model));
      }
    );
  }
});

server.listen(PORT, () => {
  console.log("server is runing...");
});
