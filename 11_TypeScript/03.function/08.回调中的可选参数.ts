function showFunA(name:string, fun:(arg:any,ele?:string) => void) {
    fun(name,name)
}

showFunA('zhangsan',(e1,e2) => {
    console.log(e2.toUpperCase)
})