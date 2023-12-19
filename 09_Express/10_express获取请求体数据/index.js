//引入express框架
const express = require('express');
// 引入body-parser
const bodyParser = require('body-parser');
//创建服务对象
const app = express();

//处理 querystring 格式的请求体
let urlParser = bodyParser.urlencoded({extended:false});
//处理 JSON 格式的请求体
let jsonParser = bodyParser.json();

app.post('/login', urlParser,(request,response)=>{
    //获取请求体数据
    response.send(request.body);
});
//监听端口
app.listen(9000,()=>{
    console.log('服务已启动');
});
