const fs = require('fs')

//异步删除文件夹
fs.rmdir('./a/b/c', err => {
    if(err) {
        throw err
    }
    console.log('删除成功');
})

// 异步递归删除文件夹
fs.rmdir('./a',{recursive: true}, err => {
    if(err) {
        throw err
    }
    console.log('异步递归删除成功');
})

//同步递归删除文件夹
fs.rmdirSync('./x', {recursive: true})
