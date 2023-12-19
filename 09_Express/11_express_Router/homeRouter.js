// 1. 引入express
const express = require('express')

// 2. 创建路由
const router = express.Router();

// 3. 在router上添加路由
router.get('/', (req, res) => {
    res.send('首页');
})
router.get('/cart', (req, res) => {
    res.send('购物车');
});

// 4. 暴露

module.exports = router
