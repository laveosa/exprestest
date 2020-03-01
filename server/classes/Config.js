const EventEmmiter = require("events");
const path = require("path");

class Config extends EventEmmiter {
  constructor() {
    super();
  }
  getContentType = req => {
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
  };
  setEventListeners = (req, res, file) => {
    req
      .addListener("end", function() {
        file.serve(req, res);
      })
      .resume();
  };
}

module.exports = Config;
