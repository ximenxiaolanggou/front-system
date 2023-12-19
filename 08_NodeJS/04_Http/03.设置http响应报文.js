const http = require('http')

const server = http.createServer((request, response) => {
    response.statusCode = 203
    response.statusMessage = 'hello'
    response.setHeader('name', 'zhangsan')
    response.setHeader('age', [1,2,3])
    response.setHeader('content-type','text/html;charset=utf-8');
    // write 可以多次写入，内容会拼接
    response.write('hello')
    response.write(' world')
    // end只能一次，并需要放在最后
    response.end(' 西门')
})

server.listen(9000, () => {
    console.log('服务启动成功')
})
