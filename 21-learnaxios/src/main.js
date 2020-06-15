import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


//1.axios的基本使用
axios({
  url: 'http://httpbin.org/ip',
  method: 'get',
  params: {

  }

}).then(res=>console.log(res))

//2.axios的并发请求
axios.all([
  axios.get('http://httpbin.org/ip'),
  axios.get('http://httpbin.org/ip')]
  ).then(res=>{
    console.log(res);
  }
)