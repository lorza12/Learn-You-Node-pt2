const fs = require("fs");
const path = require('path');
const folderPath = process.argv[2];
const extension = "." + process.argv[3];

function callback(err, list) {
  if (err) {
    return console.log(err);
  }
  else{
    list.forEach(file => {

        if (path.extname(file) === extension){
            console.log(file)
        }

        
    });
  }


}

fs.readdir(folderPath, "utf8", callback);