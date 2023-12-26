
function combine<Type>(arr1: Type[], arr2: Type[]):Type[] {
    return arr1.concat(arr2)
}

// 不建议这么使用
const arr = combine<string | number>(["string"],[1,2,3])

console.log(arr)