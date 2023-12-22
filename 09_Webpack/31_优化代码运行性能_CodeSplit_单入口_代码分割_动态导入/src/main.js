import sum from "./js/sum";
// 引入资源，Webpack才会对其打包
import "./css/iconfont.css";
import "./css/index.css";
import "./less/index.less";
import "./sass/index.sass";
import "./scss/index.scss";
import "./styl/index.styl";

const result2 = sum(1, 2, 3, 4);
console.log(result2);

// 以下代码生产模式下会删除
if (module.hot) {
    module.hot.accept("./js/sum.js", function (sum) {
        const result2 = sum(1, 2, 3, 4);
        console.log(result2);
    });
}

document.getElementById("btn").onClick = function () {
    // eslint会对动态导入语法报错，需要修改eslint配置文件
    // webpackChunkName: "math"：这是webpack动态导入模块命名的方式
    // "math"将来就会作为[name]的值显示。
    import(/* webpackChunkName: "math" */ "./js/math.js").then(({ count }) => {
        console.log(count(2, 1));
    });
};
