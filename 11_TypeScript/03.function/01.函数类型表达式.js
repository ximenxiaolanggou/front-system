// 定义函数sayHello，参数为函数ShowFun
function sayHello(fn) {
    fn("show ~~");
}
// 定义函数funI
function funI(arg) {
    console.log(arg);
}
// 调用函数
sayHello(funI);
