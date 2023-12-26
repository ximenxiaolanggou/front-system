class ConstructorClass {
    x:number
    y:number

    constructor(x:number = 1, y:number = 2) {
        this.x = x
        this.y = y
    }
}

new ConstructorClass()
new ConstructorClass(1,2)