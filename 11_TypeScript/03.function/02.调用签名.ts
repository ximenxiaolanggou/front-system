// 定义函数
type DescribableFun = {
    des: string
    age:number
    (arg: number): boolean
}

function doSomething(fn: DescribableFun) {
    console.log(fn.des)
    console.log(fn.age)
    fn(6)
}

function fn1(n: number) {
    console.log(n)
    return true;
}

fn1.des = 'hello'
fn1.age = 1
doSomething(fn1)