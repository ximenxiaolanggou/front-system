const express = require('express')

const app = express()

// 定义全局中间件
let recordMiddleware = function (request, response, next) {
    console.log(request.url)
    // 执行后续逻辑，这里是后续的匹配路由
    next()
}

// 使用全局中间件
app.use(recordMiddleware)

app.get('/',(request, response) => {
    response.send('success')
})

app.listen(9000, () => {
    console.log('服务已启动')
})
