const fs = require('fs')

fs.readFile('./data/4.txt',(err, data) => {
    if(err) throw err

    console.log(data)
    console.log(data.toString())

})
