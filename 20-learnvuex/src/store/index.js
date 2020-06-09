
import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex);

//2.创建对象
const store=new Vuex.Store({
  state: {
    //保存变量状态,给定默认值
    counter: 1000,
    students:[
      {id:110,name:'ybm',age:18},
      {id:111,name:'ybm1',age:19},
      {id:112,name:'ybm2',age:20},
      {id:113,name:'ybm3',age:21},
    ]
    
  },
  mutations: {
    //方法
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    }
  },
  actions: {
    
  },
  getters: {
    //类似Vue的计算属性：就是界面需要展示的数据，需要加工后才能展示，就需要在计算属性内编辑
    powerCounter(state){
      return state.counter*state.counter
    },
    more20stu(state){
      return state.students.filter(s => s.age > 20)
    }
  },
  modules: {
    
  }

})


//导出store 对象
export default store;