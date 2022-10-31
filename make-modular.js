const getFiles = require("./06-mymodule");
const path = require("path");

const folder = process.argv[2];
const ext = process.argv[3];

getFiles(folder, ext, function (err, list) {
  if (err) {
    return console.log("There was an error", err);
  }
  list.forEach(function (file) {
    console.log(file);
  });
});