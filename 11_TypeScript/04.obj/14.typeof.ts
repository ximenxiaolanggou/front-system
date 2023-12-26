let strName = 'abc'

let a:typeof strName = '123'

a = '234'

type Predicate = (x:unknown) => boolean

// ReturnType 代表代表返回值类型
type k = ReturnType<Predicate>

let kI:k = true