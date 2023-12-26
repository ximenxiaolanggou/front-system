function showFunA<Type, Key extends keyof Type>(arg1:Type, agr2:Key) {

}

let o = {
    a:1,
    b:2
}

showFunA(o,'a')