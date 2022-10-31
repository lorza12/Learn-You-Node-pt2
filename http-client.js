const http = require('http')


const url = process.argv[2]
function callback(response) {
    response.on('error', console.error)
    response.on('data', function (data) {
        const buff = data;
        const str = String(buff);
        console.log(str)
     })
}

const test = http.get(url, callback)