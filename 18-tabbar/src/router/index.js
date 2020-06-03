import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  routes: [

  ]
})


//在main引用css,但是一般不建议在这个位置引用，而是在对应组件内的style标签内用@import(url)来引用css
// require('./assets/css/base.css')