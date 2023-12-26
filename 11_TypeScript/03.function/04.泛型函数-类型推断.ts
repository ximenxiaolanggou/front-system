function firstElement<Type>(arr: Type[]): Type {
    return arr[0]
}

let a = firstElement([1,2,3])
// 泛型string可以省略不写
let b = firstElement<string>(['1','2','3'])

// 自定义map
// 泛型名称 Input、Output可以随便编写
function myMap<Input, Output>(eles: Input[], fun: (ele: Input) => Output):Output[] {
    return eles.map(fun)
}

let res = myMap(['1','2','3'], (ele) => parseInt(ele))

console.log(res)
