const fs = require('fs')

fs.rename('./data/1.txt', './data/11.txt', err => {
    if(err) throw err;
    console.log('success')
})

fs.renameSync('./data/2.txt', './data/22.txt')

