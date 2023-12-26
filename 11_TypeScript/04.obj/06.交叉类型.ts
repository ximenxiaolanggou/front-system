interface Color {
    col:string
}

interface Cycle {
    radious:string
}

type ColorWithCycle = Color & Cycle

function showFunA(person: Color & Cycle) {}