const express = require('express')

const app = express()

// 定义全局中间件
let routeMiddleware1 = function (request, response, next) {
    console.log('第一个路由中间件')
    next()
}

let routeMiddleware2 = function (request, response, next) {
    console.log('第二个路由中间件')
    next()
}

app.get('/',routeMiddleware1, routeMiddleware2, (request, response) => {
    response.send('success')
})

app.listen(9000, () => {
    console.log('服务已启动')
})
