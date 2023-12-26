class ReadOnlyClass {
    readonly name:string = 'hello'

    // 构造器中可以对readonly的字段进行赋值
    constructor(name:string) {
        this.name = name
    }
}