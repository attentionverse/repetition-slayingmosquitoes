const fs = require("fs");
const text = fs.readFileSync("slayer.txt", "utf-8")
console.log("The content of the file is")
console.log(text);
console.log("Creating a new file...")
fs.writeFileSync("rohan.txt", text);