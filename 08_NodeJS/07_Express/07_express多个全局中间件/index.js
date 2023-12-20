const express = require('express')

const app = express()

// 定义全局中间件
let middleware1 = function (request, response, next) {
    console.log('第一个全局中间件')
    next()
}

let middleware2 = function (request, response, next) {
    console.log('第二个全局中间件')
    next()
}


// 使用全局中间件
app.use(middleware1)
app.use(middleware2)

app.get('/',(request, response) => {
    response.send('success')
})

app.listen(9000, () => {
    console.log('服务已启动')
})
