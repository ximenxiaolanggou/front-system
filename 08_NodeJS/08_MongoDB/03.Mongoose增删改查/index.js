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

    // 插入一条数据
    let insertOne =  BookModel.create(
        {
            name: '用户1',
            age: 18
        }
    );
    insertOne.then(data => {
        console.log(data)
    })

    // 插入多条数据
    let insertMany =  BookModel.insertMany([
        {
            name: '用户2',
            age: 18
        },
        {
            name: '用户3',
            age: 18
        },
    ]);
    insertMany.then(data => {
        console.log(data)
    })

    // 删除一条数据
    let delOne = BookModel.deleteOne({_id: '6582b7cb48b1249f026c4c9e'})
    delOne.then(data => {
        console.log(data)
    })

    // 批量删除
    let delMany = BookModel.deleteMany({name: '用户1'})
    delMany.then(data => {
        console.log(data)
    })

    // 更新一条数据
    let updateOne = BookModel.updateOne({name: '用户2'}, {name: '用户22'})
    updateOne.then(data => {
        console.log(data)
    })

    // 批量更新数据
    let updateMany = BookModel.updateMany({name: '用户2'}, {name: '用户22'})
    updateMany.then(data => {
        console.log(data)
    })

    // 查询一条数据
    let findOne = BookModel.findOne({name: '用户3'})
    findOne.then(data => {
        console.log(data)
    })

    // 批量查询数据 - 不加条件查询
    let find = BookModel.find()
    find.then(data => {
        console.log(data)
    })

    // 批量查询数据 - 加条件查询
    let findCondition = BookModel.find({name: '用户3'})
    find.then(data => {
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
