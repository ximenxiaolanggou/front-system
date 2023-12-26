function sayHello(id: number | string | number[]) {
    if(typeof id === 'number') {
        console.log('字符串类型')
    }else if(typeof id === 'string') {
        console.log('字符串类型' +id.toUpperCase())
    }
}


sayHello(1)
sayHello("abc")