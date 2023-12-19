const path = require('path')
const express = require('express');
const app = express();

// 1. 设置模板引擎
app.set('view engine', 'ejs')

// 2. 设置模板文件存放位置
app.set('views',path.resolve(__dirname, './views'))


app.get('/home.html',(request,response)=>{
    // 3. render响应
    // response.render('模板名称', '数据');
    let name = '西门'
    response.render('home', {name})
});
//监听端口
app.listen(9000,()=>{
    console.log('服务已启动');
});

