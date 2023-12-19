const fs = require('fs');

fs.unlink('./data/11.txt', err => {
    if(err) throw err;
    console.log('删除成功');
});

fs.unlinkSync('./data/22.txt');
