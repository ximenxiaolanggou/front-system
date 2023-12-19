const fs = require('fs')

let ws = fs.createWriteStream('./data/4.txt')
ws.write('高堂明镜悲白发\r\n')
ws.write('朝如青丝暮成雪\r\n')

ws.end()
