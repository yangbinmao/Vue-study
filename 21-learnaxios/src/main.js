import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

axios.defaults.baseURL = 'http://httpbin.org'  //设置axios全局url头位置
axios.defaults.timeout = 5000                 //设置响应超时时间


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//以下都是在使用全局的axios以及配置来进行网络请求
//1.axios的基本使用
axios({
  url: '/ip',
  method: 'get',
  params: {

  }

}).then(res=>console.log(res))
//get请求参数的属性名就是params,post请求参数的属性名就是data
axios({
  url: '/ip',
  method: 'post',
  data: {
    
  }

}).then(res=>console.log(res))

//2.axios的并发请求
axios.all([
  axios.get('/ip'),
  axios.get('/ip')
]).then(res=>{
  console.log(res);
  let res1=res[0];
  let res2=res[1];
  //这样写很喽，可以通过axios.spread
})

//通过方法axios.spread()把返回值直接映射到变量上。
axios.all([
  axios.get('/ip'),
  axios.get('/ip')
]).then(axios.spread((res1,res2) => {
  console.log(res1);
  console.log(res2);
  
  
})).catch(res=>{
  console.log('error');
  
})

console.log('--------------分割---------');

const instance1 = axios.create ({
  baseURL:"http://127.0.0.1:8877/api/voice",
  // timeout:5000
})

instance1({
  url:'/pageList',
  params:{
    page:1,
    size:5
  }
}).then(res=>console.log(res))

//5.封装request模块

console.log('---------------封装request模块--------------');

import {request} from './network/request'


request({
  url: '/ip',
}).then(res => console.log('res',res)
).catch(err => console.log('err',err)
)