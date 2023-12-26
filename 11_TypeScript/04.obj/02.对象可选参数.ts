interface Banner {
    name:string
    age?:number
    hobby?:string[]
}

function showFunA(banner:Banner) {

}

showFunA({name: 'zhangsan'})

// 可以解构赋默认值
function showFunB({name, age = 10, hobby}:Banner) {

}
