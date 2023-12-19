const fs = require('fs')

// 异步创建文件夹
fs.mkdir('./data1', err => {
    if(err) throw err
    console.log('data1 success')
})

//递归异步创建
fs.mkdir('./a/b/c', {recursive: true}, err => {
    if(err) throw err;
    console.log('递归创建成功');
});

//递归同步创建文件夹
fs.mkdirSync('./x/y/z', {recursive: true});
