const fs = require('fs')

fs.stat('./data/4.txt', (err, data) => {
    if(err) throw err;
    console.log(data);
});

//同步获取状态
let data = fs.statSync('./data/4.txt');
