const http = require('http')

const server = http.createServer((request, response) => {
    // 请求方法
    console.log('method', request.method)

    // 协议版本
    console.log('version', request.httpVersion)

    // 请求路径
    console.log('url', request.url)

    // 解析请求路径
    console.log('parseUrl', require('url').parse(request.url))

    // 解析请求路径(将参数封装成对象)
    console.log('parseUrl', require('url').parse(request.url, true))

    // 请求头
    console.log('headers', request.headers)

    // 请求体
    request.on('data',chunk => {})
    request.on('end', () => {})

    response.end('Hello world 西门')
})

server.listen(9000, () => {
    console.log('服务启动成功')
})
