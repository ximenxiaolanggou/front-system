class Person {
    name:string

    constructor(name:string) {
        this.name = name
    }

    showName() {
        return this.name
    }
}

let p = new Person('张三')
console.log(p.showName)