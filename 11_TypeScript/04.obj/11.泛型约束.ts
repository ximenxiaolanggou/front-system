interface lenI {
    length:number
}

function showFunA<Type extends lenI>(arg:Type){
    arg.length
}