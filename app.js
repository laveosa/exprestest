const dotenv = require("dotenv").config();
const fs = require("fs");
const path = require("path");

let myUrl = new URL(
  "https://mywebsite.com/main/:userId=Nik&password=123qwe/?location=12"
);

console.log(myUrl);
