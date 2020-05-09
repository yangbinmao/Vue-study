//使用commonjs的模块化规范
const {add,mul} = require('./js/mathUtil.js')

console.log(add(20,30));
console.log(mul(20,30));
//使用ES6的模块化规范
import {name,age} from './js/info';
console.log(name,age)

//依赖css文件
require('./css/normal.css')

//依赖less文件
require('./css/special.less')
document.writeln('<h2>你好啊，ybm</h2>')