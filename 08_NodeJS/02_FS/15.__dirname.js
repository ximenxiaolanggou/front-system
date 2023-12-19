const fs = require('fs')
let data = fs.readFileSync(__dirname + '/data/4.txt');
console.log(data.toString());
