//使用commonjs的模块化规范
const {add,mul} = require('./mathUtil.js')

console.log(add(20,30));
console.log(mul(20,30));
//使用ES6的模块化规范
import {name,age} from './info';
console.log(name,age)