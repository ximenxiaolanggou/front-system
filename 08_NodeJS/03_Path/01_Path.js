const path = require('path')

console.log('path', path)

console.log('__dirname', __dirname)

//获取路径分隔符
console.log('sep', path.sep);

//拼接绝对路径
console.log(path.resolve(__dirname, 'test'));

//解析路径
let pathname = 'D:/program file/nodejs/node.exe';
console.log('parse',path.parse(pathname));

//获取路径基础名称
console.log('basename',path.basename(pathname))
//获取路径的目录名
console.log('dirname',path.dirname(pathname));
//获取路径的扩展名
console.log('extname', path.extname(pathname));
