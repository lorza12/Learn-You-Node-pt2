const http = require("http");
const bl = require("bl");
const { Console } = require("console");

const urls = process.argv.slice(2);
let responseArr = [];

for (let i = 0; i < urls.length; i++) {
  const test1 = http.get(urls[i], function callback(response) {
    response.on("error", console.error);
    response.pipe(
      bl(function (err, data) {
        let responseStr = data.toString();
    
        responseArr[i] = responseStr;

        if (responseArr.length === urls.length) {
          for (let i = 0; i < responseArr.length; i++) {
            
            console.log(responseArr[i])
          }
        }
      })
    );
  });
}