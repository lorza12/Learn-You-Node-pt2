const fs = require ('fs');
const path = process.argv[2];

function callback(err, data){
    if(err){
        return console.log(err);
    }
    const str = data.toString().split('\n');
    
    const result = str.length - 1;
    console.log(result)
    return result;
}

fs.readFile(path, 'utf8', callback);