type A1 = {
    name:string,
    age:number
}

type A2 = A1['age']

let v1:A2 = 3

interface A3 {
    name:string,
    age:number
}

type A4 = A3['age']
let v2:A4 = 3

