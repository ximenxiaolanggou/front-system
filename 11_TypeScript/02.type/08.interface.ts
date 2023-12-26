interface Point {
    x: number;
    y: number;
}

function showPoint(point: Point) {
    console.log(point.x)
    console.log(point.x)
}

showPoint({x: 12, y: 13})

interface AnimialI {
    name:string
}

// 通过继承实现扩展
interface DogI extends AnimialI {
    food:string
}

function showAnimialI(obj: DogI) {

}

showAnimialI({name: "xiaobai", food: "futou"})



type AnimialT = {
    name:string
}

// 通过 & 实现扩展
type DogT = AnimialT & {
    food:string
}

function showAnimialT(obj: DogT) {

}

showAnimialT({name: "xiaobai", food: "futou"})


interface Fruit {
    name:string
}

interface Fruit {
    color:string
}

function showFruit(fruit: Fruit) {

}

showFruit({name: "草莓", color: 'red'})