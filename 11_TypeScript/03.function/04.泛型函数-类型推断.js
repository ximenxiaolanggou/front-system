function firstElement(arr) {
    return arr[0];
}
var a = firstElement([1, 2, 3]);
// 泛型string可以省略不写
var b = firstElement(['1', '2', '3']);
// 自定义map
// 泛型名称 Input、Output可以随便编写
function myMap(eles, fun) {
    return eles.map(fun);
}
var res = myMap(['1', '2', '3'], function (ele) { return parseInt(ele); });
console.log(res);
