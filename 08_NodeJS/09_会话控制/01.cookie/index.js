const express = require('express')
// 引入 cookieParser 包
const cookieParser = require('cookie-parser')
const {request, response} = require("express");

const app = express();

// 设置 cookieParser 中间件
app.use(cookieParser())

// 设置 cookie
app.get('/set-cookie', (request, response) => {
    // 不带时效性 - 浏览器关闭cookie失效
    response.cookie('username', 'zhangsan')
    // 带时效性
    response.cookie('email', '78@qq.com', {maxAge: 5 * 60 * 1000, path: '/', httpOnly: true})
    response.send('set-cookie~~')
})

// 读取 cookie
app.get('/get-cookie', (request, response) => {
    console.log(request.cookies)
    response.json(request.cookies)
})

// 删除 cookie
app.get('/delete-cookie', (request, response) => {
    //删除
    response.clearCookie('username');
    response.send('cookie 的清除');
})

app.listen(9000, () => {
    console.log('服务已启动')
})
