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