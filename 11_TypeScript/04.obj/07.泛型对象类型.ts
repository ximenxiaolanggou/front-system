// 接口实现泛型对象类型
interface Oranage<Type> {
    content:Type
}

let oranage1:Oranage<string> = {content: 'oranage'}

// type 实现泛型对象类型
type Juice<Type> = {
    content:Type
}

let juice1:Juice<number> = {content:1}