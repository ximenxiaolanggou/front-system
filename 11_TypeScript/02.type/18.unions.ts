interface Circle {
    kind: 'circle'
    radius: number
}

interface Square {
    kind: 'square'
    sideLength: number
}

type Shape = Circle | Square

function showFunA(shape: Shape) {
    switch(shape.kind) {
        case 'circle': 
            break;
        case 'square': 
            break;
    }
}
