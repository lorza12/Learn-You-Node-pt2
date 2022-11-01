const http = require('http');
const fs   = require('fs');
const map  = require('through2-map');

const port = process.argv[2];

const server = http.createServer(function(request, response) {
    request.pipe(map(function (part) {
        return part.toString().toUpperCase();
    })).pipe(response);
});


server.listen(port);