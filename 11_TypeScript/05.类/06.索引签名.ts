class Oranage {
    [s:string]:boolean | ((s:number) => string)

    x:boolean = false

    check(s:number) {
        return this[s] ? '1' : '0'
    }
}