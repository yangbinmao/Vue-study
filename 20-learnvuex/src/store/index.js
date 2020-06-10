
import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex);

//2.创建对象
const store=new Vuex.Store({
  state: {
    //用前须知
    //这里就是所有全局变量存放的地方
    
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
    //用前须知
    //在这里面创建的方法参数可以只是state(其实都是会带上state的，不然怎么改变值)
    //也可以继续添加参数，后边的参数就等于你需要对变量值操作的变化值（就是的传过来的参数）

    //Vuex官方唯一推荐修改全局变量的值的方式，就是使用mutations方式。
    //通过mutations更新的方式:在任何组件内调用$store.commit.('方法名')，就可以调用mutations里面的方法。
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    //通过mutations带参的更新的方式:在任何组件内调用$store.commit.('方法名'，参数值)，就可以调用mutations里面的方法。
    incrementCount(state,count){ //count就等于是传过来的变量
      state.counter+=count
    }
  },
  actions: {
    
  },
  getters: {
    //用前须知
    //在这里面创建的方法参数可以只是state(其实都是会带上state的，不然怎么操作值)
    //也可以继续添加参数，但是后边的值，只能是  方法名(state,getters,...){} 意思是不能是外来参数或者变量
    //如果有外来参数，是写在建立方法里面return一个函数，参数就放在这函数的形参里面。详情见下面moreAgeStu，

    //当全局属性，需要经过一些变化后给其他组件进行展示。
    //类似Vue的计算属性：就是界面需要展示的数据，需要加工后才能展示，就需要在计算属性内编辑
    //通过getters获取变化后的属性的方式:在任何组件内调用$store.getters.方法名，就可以调用getters里面的方法。

    powerCounter(state){
      return state.counter*state.counter
    },
    more20stu(state){
      return state.students.filter(s => s.age > 20)
    },

    //可以直接把getters当做参数传入。但是还是必须写state.说白了，第一个位置屋里是什么，他都代表state,第二个值，代表getters
    more20stuLength(state,getters){ 
      return getters.more20stu.length
    },
    //带参数（指其他组件有动态要求的时候）的传入方式,
    //在任何组件内调用$store.getters.方法名(参数值)，就可以调用getters里面带参的方法。
    moreAgeStu(state){ 
        
        //如果要在在传入的带参数，可以返回的时候就返回函数，然后把参数值传入到返回的函数参数里面
        return function(age){
          return state.students.filter(function(s){
            return s.age>age
          })
        }
      }
      // return age=>state.students.filter(s => s.age > age)  //简写上边
  },
  modules: {
    
  }

})


//导出store 对象
export default store;