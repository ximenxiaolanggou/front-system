// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs')

const res = fs.writeFile('./data/1.txt', '我爱中国', err => {
    //如果写入失败，则回调函数调用时，会传入错误对象，如写入成功，会传入 null
    if(err) {
        console.log('文件写入失败', err)
        return
    }
    console.log('success~')
})

console.log(res)
