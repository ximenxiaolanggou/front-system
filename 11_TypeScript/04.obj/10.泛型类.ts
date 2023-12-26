class GenericNumber<Type> {
    name:Type
    add:(x:Type,y:Type) =>void

}

let classGeneri = new GenericNumber<string>()
classGeneri.name = '张三'
classGeneri.add = function(x,y){

}