function showFunA<Type>(arg:Type): Type {
    return arg
}

let showFunAObj:<Type>(arg:Type)=>Type = showFunA


interface showFunB<Type> {
    (arg:Type):Type
}

let showFunBObj:showFunB<string> = showFunA