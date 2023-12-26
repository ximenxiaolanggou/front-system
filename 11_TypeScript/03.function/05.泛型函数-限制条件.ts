function longest<T extends {length: number}>(arg1: T, arg2: T): T{
    return arg1.length > arg2.length ? arg1 : arg2;
}

console.log(longest([1,2,3], [1,2])) // 输出 [ 1, 2, 3 ]

console.log(longest('abc', 'abcd'))  // 输出 abcd