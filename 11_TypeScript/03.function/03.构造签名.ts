// 定义苹果类
class Apple {
    color: string

    constructor(color:string) {
        this.color = color
    }
}

type CreateApple = {
    new (color:string): Apple
}

function cApple(createApple: CreateApple) {
    return new createApple('red');
}

const apple = cApple(Apple);

console.log(apple.color)

// 接口定义调用签名和构造签名
interface CallOrCrt {
    new (str: string): Date
    (n?: number): number
}

function fn(date: CallOrCrt) {
    let d = new date("2021-09-01")
    let n = date(100)
}