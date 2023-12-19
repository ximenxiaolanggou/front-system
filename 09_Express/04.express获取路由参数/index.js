const express = require('express')
const {response} = require("express");

const app = express();

app.get('/:id.html', (req, res) => {
    res.send('商品详情, 商品 id 为' + req.params.id);
});

app.get('/:id/home', (request, response) => {
    response.send(request.params.id)
})

app.all('*', (request, response) => {
    response.send('<h1>404 未找到页面</h1>')
})

app.listen(9000, () => {
    console.log('服务启动成功~~')
})
