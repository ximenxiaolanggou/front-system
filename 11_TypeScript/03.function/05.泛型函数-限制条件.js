function longest(arg1, arg2) {
    return arg1.length > arg2.length ? arg1 : arg2;
}
console.log(longest([1, 2, 3], [1, 2]));
console.log(longest('abc', 'abcd'));
