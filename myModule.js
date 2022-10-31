
const fs = require("fs");
const path = require("path");

function getFiles(dirName, extFilter, callback) {
  extFilter = "." + extFilter;
  fs.readdir(dirName, "utf-8", function (err, data) {
    if (err) {
      return callback(err);
    } else {
      list = [];
      data.forEach((element) => {
        // console.log(extFilter)
        if (path.extname(element) === extFilter) {
          list.push(element);
        }
      });
    }
    return callback(err, list);
  });
}

module.exports = getFiles;