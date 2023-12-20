// 1. 导入 express
const express = require('express')
const {response} = require("express");

// 2.创建应用对象
const app = express();

// 3.创建路由规则
app.get('/', (request, response) => {
    response.send('hello world 西门')
})

app.get('/home', (request, response) => {
    response.send('Home')
})

// all 代表所有请求方式
app.all('/my', (request, response) => {
    response.send('我的')
})

//自定义 404 路由
app.all('*', (request, response) => {
    response.send('<h1>404 未找到页面</h1>')
})

//4. 监听端口 启动服务
app.listen(9000, () => {
    console.log('服务启动成功~~')
})
