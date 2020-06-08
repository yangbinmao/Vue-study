import Vue from 'vue'
import App from './App'
import router from './router'
//引用vuex创建吃出来的store。它的引用使用方式有点类似router,需要创建router文件夹，编写对应的index.js
import store from './store'

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//挂载store(就是vuex)
  render: h => h(App)
  
})
