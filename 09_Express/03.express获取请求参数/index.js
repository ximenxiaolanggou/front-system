// 1. 导入 express
const express = require('express')
const {response} = require("express");

// 2.创建应用对象
const app = express();

// 3.创建路由规则
app.get('/home', (request, response) => {
    //1. 获取报文的方式与原生 HTTP 获取方式是兼容的
    console.log(request.method);
    console.log(request.url);
    console.log(request.httpVersion);
    console.log(request.headers);

    //2. express 独有的获取报文的方式
    //获取查询字符串
    console.log(request.query); // 『相对重要』
    // 获取指定的请求头
    console.log(request.get('host'));
    response.send('Home')
})

//自定义 404 路由
app.all('*', (request, response) => {
    response.send('<h1>404 未找到页面</h1>')
})

//4. 监听端口 启动服务
app.listen(9000, () => {
    console.log('服务启动成功~~')
})
