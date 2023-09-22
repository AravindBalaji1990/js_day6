//simple way to read json
///Users/aravindbalaji/Documents/Javascript/Day6/sample.json --> absolute path
// const config = require("./sample.json");
// console.log(config.address.toString().concat(' street'))
// console.log(config.date)

//using fs
// this will return a string but not object
const fs = require("fs");
fs.readFile("/Users/aravindbalaji/Documents/Javascript/Day6/sample.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  console.log("File data:", jsonString);
  console.log(typeof jsonString);
});

