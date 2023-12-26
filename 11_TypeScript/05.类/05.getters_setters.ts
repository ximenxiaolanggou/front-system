class Apple {
    
    _color:string

    get color():string {
        return this.color
    }

    set color(color:string){
        this.color = color
    }


    constructor(color:string) {
        this._color = color
    }
}

let apple:Apple = new Apple('red')
apple.color = 'blue'
console.log(apple.color)