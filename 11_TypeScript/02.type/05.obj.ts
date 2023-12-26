function sayHello(obj: {x: string, y: number}) {

}

sayHello({
    x: "zhangsan",
    y: 12
})


function sayHello2(obj: {x?: string, y: number}) {
    console.log(obj.x?.toLocaleLowerCase)
}

sayHello2({
    y: 12
})
