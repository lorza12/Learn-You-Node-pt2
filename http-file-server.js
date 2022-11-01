const fs = require("fs");
const http = require("http");

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer(function callback(request, response) {
  const stream = fs.createReadStream(file);
  stream.pipe(response);
});

server.listen(port);