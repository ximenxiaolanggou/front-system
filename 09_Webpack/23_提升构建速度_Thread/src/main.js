import count from './js/count'
import sum from './js/sum'
import './css/index.css'
import './css/iconfont.css'
import './less/index.less'
import './sass/index.sass'
import './scss/index.scss'
import './styl/index.styl'

console.log(count(1,2))
console.log(sum(1,2,3))

// 判断是否支持HMR功能
if (module.hot) {
    module.hot.accept("./js/count.js", function (count) {
        const result1 = count(2, 1);
        console.log(result1);
    });

    module.hot.accept("./js/sum.js", function (sum) {
        const result2 = sum(1, 2, 3, 4);
        console.log(result2);
    });
}
