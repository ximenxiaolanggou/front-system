interface Dog {
    color:string
    age?:number

    bark():void
}

class Xiaobai implements Dog {
    color: string = 'xiaobai'

    bark(): void {
        
    }
}

let XB:Xiaobai = new Xiaobai();
console.log(XB.color)

// 可选熟悉是不会继承下来的
console.log(XB.age)