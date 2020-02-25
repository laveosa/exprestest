const dotenv = require("dotenv").config();
const fs = require("fs");
const path = require("path");

let model = {
  name: "Nik",
  age: 37,
  position: "developer"
};

model = JSON.stringify(model);

// fs.writeFile(
//   path.join(__dirname, "app/server/files/users.json"),
//   model,
//   err => {
//     if (err) throw err;
//   }
// );

fs.readFile(
  path.join(__dirname, "app/server/files/users.json"),
  "utf-8",
  (err, data) => {
    if (err) throw err;

    console.log(JSON.parse(data));
  }
);
