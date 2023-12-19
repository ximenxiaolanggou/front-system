//1.引入ejs
const ejs = require('ejs');
//2.定义数据
let flag = true;

let html = ejs.render(`
    <% if(flag) { %>
        <h1>True</h1>
    <% }else{ %>
        <h1>False</h1>
    <% } %>
`, {flag})

console.log(html)
