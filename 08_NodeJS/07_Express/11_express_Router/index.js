//引入express框架
const express = require('express');
// 引入子文件
const homeRouter = require('./homeRouter')
//创建服务对象
const app = express();

// 设置和使用中间件
app.use(homeRouter)

//监听端口
app.listen(9000,()=>{
    console.log('服务已启动');
});
