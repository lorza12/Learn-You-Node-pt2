const fs = require ('fs')
const { type } = require('os')
const path = process.argv[2]


const buf = fs.readFileSync(path)
const str = buf.toString().split('\n')
const result = str.length - 1


console.log(result)