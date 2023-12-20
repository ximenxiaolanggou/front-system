//1.引入ejs
const ejs = require('ejs');
//2.定义数据
let person = ['张三','李四','王二麻子'];

let html = ejs.render(`<ul>
    <% person.forEach(p => { %>
    <li><%= p %></li>
    <% }) %>
</ul>`, {person})

console.log(html)
