// 匿名对象
function showFunA(person: {name:string, age:number}) {

}

// 接口对象
interface PersonI {
    name:string;
    age:number;
}

function showFunB(person: PersonI) {

}

// 类型别名
type PersonType = {
    name:string
    age:number
}

function showFunC(person: PersonType) {

}




