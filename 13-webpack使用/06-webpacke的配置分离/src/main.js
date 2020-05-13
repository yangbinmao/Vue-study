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

//5.使用vue进行开发
import Vue from 'vue'

//写在一起
// new Vue({
// 	el:'#app',
// 	template:`
// 	<div>
// 		<h2>{{message}}</h2>
// 		<button @click="btnClick">按钮</button>
// 		<h2>{{name}}</h2>
// 	</div>
// 	`,
// 	data:{
// 		message: 'Hello Webpack',
// 		name: 'ybm'
// 	},
// 	methods:{
// 		btnClick(){
// 			console.log("btnClick");
// 		}
// 	}
// })

//抽取组件出来
// const App={
// 	template:`
// 		<div>
// 			<h2>{{message}}</h2>
// 			<button @click="btnClick">按钮</button>
// 			<h2>{{name}}</h2>
// 		</div>
// 		`,
// 		data(){
// 			return{
// 				message: 'Hello Webpack',
// 				name: 'ybm'
// 			}
// 		},
// 		methods:{
// 			btnClick(){
// 				console.log("btnClick");
// 			}
// 		}
// }


// new Vue({
// 	el:'#app',
// 	template:'<App/>',
// 	components:{
// 		App
// 	}
// })

//把组件放在Vue文件里面的js里面
// import App from './vue/app.js'

// new Vue({
// 	el:'#app',
// 	template:'<App/>',
// 	components:{
// 		App
// 	}
// })

//使用vue.js进行引入
import App from './vue/App.vue'

new Vue({
	el:'#app',
	template:'<App/>',
	components:{
		App
	}
})


document.writeln('<button>按钮</button>')