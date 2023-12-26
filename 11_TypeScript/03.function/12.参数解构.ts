function sum({a,b,c}:{a:number,b:number,c:number}) {
    console.log(a + b + c)
}

sum({
    a:1,
    b:2,
    c:3
})

// 也可以写成

type SumDTO = {a:number,b:number,c:number}
function sum2({a,b,c}:SumDTO) {
    console.log(a + b + c)
}

sum2({
    a:1,
    b:2,
    c:3
})