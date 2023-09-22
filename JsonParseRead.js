//Json Read as object
const fs = require("fs");
fs.readFile("/Users/aravindbalaji/Documents/Javascript/Day6/sample.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const customer = JSON.parse(jsonString);
    //calling the individual parameter from json
    console.log("data available:", customer.address);
    // calling the complete json
    console.log("data available:", customer);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});
