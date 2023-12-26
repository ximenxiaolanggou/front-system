// 定义函数类型
type ShowFun = (arg: string) => void

// 定义函数sayHello，参数为函数ShowFun
function sayHello( fn:ShowFun) {
    fn("show ~~")
}

// 定义函数funI
function funI(arg: string) {
    console.log(arg)
}

// 调用函数
sayHello(funI)