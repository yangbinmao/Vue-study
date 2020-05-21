// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


const Cpn ={
  template:`
  <h2>我是一个组件对象{{message}}</h2>
  `,
  data(){
    return {
      message: '组件一号'
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',

  // components: { App },
  // template: '<App/>',
  //如果在创建项目时选择的是readonly ,他就会不要上面的components，和template 而是直接使用render
  render: function(creatElement){
    //creatElement是一个函数
    //1.普通用法： creatElement('标签'，{标签的属性}，['内容'])
    //ps: creatElement('h2',{class:'box'},['hallo word'])
    // 就等于是在界面 <h2 class='box'>hallo word<h2/>
    // return creatElement('h2',{class:'box'},['hallo word'])

    //2.传入一个组件对象
    //ps creatElement(Cpn)
    // return creatElement(Cpn)
    
    //所以
    return creatElement(App)
  }
})
