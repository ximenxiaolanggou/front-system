//导入 jsonwebtoken
const jwt = require('jsonwebtoken');
//创建 token
// jwt.sign(数据, 加密字符串, 配置对象)
let token = jwt.sign({
    username: 'zhangsan'
}, 'ximen', {
    expiresIn: 60 //单位是 秒
})
//解析 token
jwt.verify(token, 'ximen', (err, data) => {
    if(err){
        console.log('校验失败~~');
        return
    }
    console.log(data);
})
