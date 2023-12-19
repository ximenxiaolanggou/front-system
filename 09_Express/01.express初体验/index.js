// 1. 导入 express
const express = require('express')
const {response} = require("express");

// 2.创建应用对象
const app = express();

// 3.创建路由规则
app.get('/', (request, response) => {
    console.log(111)
    response.end('hello world 西门')
})

//4. 监听端口 启动服务
app.listen(9000, () => {
    console.log('服务启动成功~~')
})
