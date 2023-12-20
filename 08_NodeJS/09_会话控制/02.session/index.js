const express = require('express');
//1. 安装包 npm i express-session connect-mongo
//2. 引入 express-session connect-mongo
const session = require("express-session");
const MongoStore = require('connect-mongo');
const app = express();
//3. 设置 session 的中间件
app.use(session({
    name: 'sid', //设置cookie的name，默认值是：connect.sid
    secret: 'ximen', //参与加密的字符串（又称签名）
    saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
    resave: true, //是否在每次请求时重新保存session
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/project' //数据库的连接配置
    }),
    cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作
        maxAge: 1000 * 300 // 这一条 是控制 sessionID 的过期时间的！！！
    },
}))
//创建 session
app.get('/login', (req, res) => {
    //设置session
    req.session.username = 'zhangsan';
    req.session.email = 'zhangsan@qq.com'
    res.send('登录成功');
})
//获取 session
app.get('/home', (req, res) => {
    console.log('session的信息');
    console.log(req.session.username);
    if (req.session.username) {
        res.send(`你好 ${req.session.username}`);
    }else{
        res.send('登录 注册');
    }
})
//销毁 session
app.get('/logout', (req, res) => {
    //销毁session
    // res.send('设置session');
    req.session.destroy(() => {
        res.send('成功退出');
    });
});
app.listen(3000, () => {
    console.log('服务已经启动, 端口 ' + 3000 + ' 监听中...');
});
