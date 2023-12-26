// 定义苹果类
var Apple = /** @class */ (function () {
    function Apple(color) {
        this.color = color;
    }
    return Apple;
}());
function cApple(createApple) {
    return new createApple('red');
}
var apple = cApple(Apple);
console.log(apple.color);
