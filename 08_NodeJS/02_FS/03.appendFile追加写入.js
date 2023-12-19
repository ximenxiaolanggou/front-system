const fs = require('fs')

fs.appendFile('./data/3.txt','我爱你中国', err => {
    if(err) throw err
    console.log('success')
})
