var name = '小明'
var age = '18'
var flag = true

function sum(num1,num2){
	return num1+num2
}

if(flag){
	console.log(sum(20,30));
}

//导出方式一
export {
	flag,
	sum
}
//导出方式二
export var numb1=1000;
export var height=1.88;

//导出函数/类
export function add(num1,num2){
	return num1+num2
}

export class Person {
	run(){
		console.log("再奔跑");
	}
}

//export default
const address='北京市'
export default address;