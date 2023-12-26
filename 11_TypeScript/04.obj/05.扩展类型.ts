interface Color {
    col:string
}

interface Cycle {
    radious:string
}

interface CycleColor extends Color, Cycle {
    age:number
}

let cycleColorObj:CycleColor = {
    col:'col',
    radious:'radious',
    age:12
}