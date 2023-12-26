// 这里index只是个名字，可以随便写，并且类型只能能为 string 或者 number
interface IndexSi {
    [index:string]: number
}

let indexSi:IndexSi = {
    age:12
}


interface IndexSi2 {
    [index:number]: number
}

let indexSi2:IndexSi2 = {
    1:12
}

interface IndexSi3 {
    [index:boolean]: number
}
