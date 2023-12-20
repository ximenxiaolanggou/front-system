// 1. 引入mongoose
const mongoose = require('mongoose')

// 2. 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/test');

// 3. 设置连接成功回调
mongoose.connection.on('open', () => {
    console.log('open')
})

//连接出错
mongoose.connection.on('error', () => {
    console.log('连接出错~~');
})

//连接关闭
mongoose.connection.on('close', () => {
    console.log('连接关闭');
})
