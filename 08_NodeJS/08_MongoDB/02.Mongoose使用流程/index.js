// 1. 引入mongoose
const mongoose = require('mongoose')

// 2. 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/test');

// 3. 设置连接成功回调
mongoose.connection.on('open', () => {
    console.log('连接成功')

    // 4. 创建结构文档
    let UserSchema = new mongoose.Schema({
        name:String,
        age: Number
    })

    // 5. 创建文档模型对象
    let BookModel = mongoose.model('users', UserSchema);

    // 6. 插入文档
    let res =  BookModel.create(
        {
            name: '李二',
            age: 18
        }
    );
    res.then(data => {
        console.log(data)
    })

})

//连接出错
mongoose.connection.on('error', () => {
    console.log('连接出错~~');
})

//连接关闭
mongoose.connection.on('close', () => {
    console.log('连接关闭');
})
