const fs = require('fs')

let data1= fs.readFileSync('./data/4.txt')
console.log(data1)

let data2= fs.readFileSync('./data/4.txt',  'utf-8')
console.log(data2)
