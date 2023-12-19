const fs = require('fs')

fs.readdir('./', (err, data) => {
    if(err) throw err;
    console.log(data);
})

//同步读取
let data = fs.readdirSync('./');
console.log(data);
