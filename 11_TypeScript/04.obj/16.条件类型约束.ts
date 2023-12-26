type CusObj<T extends {message:any}> = T['message']

type CusObj2<T> = T extends {message:any} ? T['message'] : any