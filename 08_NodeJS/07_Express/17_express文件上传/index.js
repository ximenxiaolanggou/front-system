const express = require('express');
const formidable = require('formidable')
const path = require('path')
const app = express();

app.post('/upload',(request,response)=>{
    const form = formidable({
        multiple: true,
        // 设置上传文件的保存目录
        uploadDir: __dirname + '/public/images',
        // 保持文件后缀
        keepExtensions: true
    });
    form.parse(request,(err, fields, files) => {
        if(err) {
            next(err);
            return;
        }
        response.json({ fields, files });
    });
});
//监听端口
app.listen(9000,()=>{
    console.log('服务已启动');
});

