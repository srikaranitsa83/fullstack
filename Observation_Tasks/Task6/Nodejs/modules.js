// Import built-in Node.js modules
const os = require("os");
const path = require("path");
const fs = require("fs");

// ------------------------------------
// 1. OS MODULE
// ------------------------------------

console.log("===== OS MODULE =====");

console.log("Operating System:", os.platform());
console.log("OS Type:", os.type());
console.log("CPU Architecture:", os.arch());
console.log("Number of CPUs:", os.cpus().length);
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());

// ------------------------------------
// 2. PATH MODULE
// ------------------------------------

console.log("\n===== PATH MODULE =====");

const filePath = "/Users/student/Documents/example.txt";

console.log("File Path:", filePath);
console.log("Directory:", path.dirname(filePath));
console.log("File Name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));

// ------------------------------------
// 3. FS MODULE
// ------------------------------------

console.log("\n===== FS MODULE =====");

const fileName = "example.txt";
const content = "Hello! This file was created using the Node.js fs module.";

// Create and write to a file
fs.writeFileSync(fileName, content);

console.log("File created and written successfully.");

// Read the file
const data = fs.readFileSync(fileName, "utf8");

console.log("File Content:", data);

// Append additional content
fs.appendFileSync(fileName, "\nThis is additional content.");

console.log("Content appended successfully.");

// Read the updated file
const updatedData = fs.readFileSync(fileName, "utf8");

console.log("Updated File Content:");
console.log(updatedData);

