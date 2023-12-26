const CustomClass = class<Type> {
    name:Type

    constructor(name:Type) {
        this.name = name
    }
}

const cc = new CustomClass<string>('hello')

console.log(cc.name)

