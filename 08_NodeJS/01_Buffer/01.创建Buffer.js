// 方式一：alloc
let buffer1 =  Buffer.alloc(10)
console.log(buffer1)

// 方式二：alloc
let buffer2 = Buffer.allocUnsafe(10)
console.log(buffer2)

// 方式三：from
// 通过字符串创建
let buffer3 = Buffer.from('hello')
// 通过数组创建 可以写16进制也可以写 10进制
let buffer4 = Buffer.from([0x68,65,0x6c,0x6c,0x6f])
console.log(buffer3)
console.log(buffer4)

// 中文占三个字节
let buffer5 = Buffer.from('你好') // <Buffer e4 bd a0 e5 a5 bd>
console.log(buffer5)

