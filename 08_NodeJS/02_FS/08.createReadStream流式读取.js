const fs = require('fs')

const rs = fs.createReadStream('./data/4.txt')
rs.on('open', () => {
    console.log('open')
})

rs.on('data',chunk => {
    console.log(chunk)
    console.log(chunk.length)
})

rs.on('end', () => {
    console.log('读取完成')
})
