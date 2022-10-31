const http = require('http');
const bl = require('bl')

const url = process.argv[2];


function callback (response){
	response.on('error', console.error);
	response.pipe(bl(function (err, data){
		console.log(data.length)
		console.log(data.toString());
		

	}))
}

const test = http.get(url, callback);