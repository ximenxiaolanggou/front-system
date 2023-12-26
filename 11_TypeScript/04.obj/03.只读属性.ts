interface ReadOnlyApple {
    name:string
    readonly color:string
}

let apple1: ReadOnlyApple = {
    name:'xiaomei',
    color: 'red'
}

apple1.color = 'blue'