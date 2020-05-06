//1.导入{}对象中添加进去的
import {flag,sum} from './aaa.js'
if(flag){
	console.log('小明是天才');
	console.log(sum(20,30));
}
//2.直接导入export
import {numb1,height} from './aaa.js'

console.log(numb1,height);

//3.导入对象、方法
import {add,Person} from './aaa.js'
console.log(add(30,40));
const p =new Person()
p.run();

//4.导入default
import addr from './aaa.js'
console.log(addr);