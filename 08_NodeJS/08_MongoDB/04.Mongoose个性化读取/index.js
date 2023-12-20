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

    // 字段筛选
    //0:不要的字段
    //1:要的字段
    let selectRes = BookModel.find().select({_id: 0, name: 1}).exec()
    selectRes.then(data => console.log(data))

    //sort 排序
    //1:升序
    //-1:倒序
    let sortRes = BookModel.find().sort({age:-1}).exec();
    sortRes.then(data => console.log(data))

    //skip 跳过 limit 限定
    let pageRes = BookModel.find().skip(10).limit(10).exec();
    pageRes.then(data => console.log(data))
})

//连接出错
mongoose.connection.on('error', () => {
    console.log('连接出错~~');
})

//连接关闭
mongoose.connection.on('close', () => {
    console.log('连接关闭');
})
