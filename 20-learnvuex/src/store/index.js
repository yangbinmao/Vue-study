
import Vue from 'vue'
import Vuex from 'vuex'
//引用常量库
import {INCREMENTINFO} from './mutations-type'

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
    ],
    info:{id:110,name:'ybm',age:18}
    
    
  },
  mutations: {  
    //用前须知
    //在这里面创建的方法参数可以只是state(其实都是会带上state的，不然怎么改变值)
    //也可以继续添加参数，后边的参数就等于你需要对变量值操作的变化值（就是的传过来的参数）
    //注意：以下所有方法都追寻响应式布局，意思就是都是全动态关联的,是同步操作的。
    //如果是异步操作，他虽然可以改变属性值，但是不被vue捕获，所以需要异步操作需要到actions方法内定义

    //参数被称为是mutation的载荷（Payload）,可以是一个值，也可以是一个对象

    //Vuex官方唯一推荐修改全局变量的值的方式，就是使用mutations方式。
    //通过mutations更新的方式:在任何组件内调用$store.commit.('方法名')，就可以调用mutations里面的方法。
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },

    //mutations带参数修改全局变量值
    //1.直接传参数
    //通过mutations带参的更新的方式:在任何组件内调用$store.commit.('方法名'，参数值)，就可以调用mutations里面的方法。
    incrementCount(state,count){ //count就等于是传过来的变量
      //如果组件使用$store.commit.('方法名'，参数值)方式。组件的参数值就是这里的count值。
      state.counter+=count
      
    },
    //2.传参数以对象形式
    incrementCount2(state,payload){
      //如果组件使用$store.commit.({type:'方法名',参数值})方式。组件的参数值实际是整个commit对象。对象内格式{type:'mutations方法值'，参数1：参数值}
      //所以传过来的对象被形参count获取。实际值就是count(形参对象).count(真实值)
      //故如果是对象形式建议mutations内对应方法形式为incrementCount(state,payload){具体方法}，因为payload(载荷)只是一个形参，使用的人就知道这个是一个对象方法。
      state.counter+=payload.count
    },
    addStudent(state,stu){//count就等于是传过来的对象
      //如果是对象添加，数组的添加方法是push.
      state.students.push(stu)
    },

    //mutations带参数给全局变量添加其他属性，Ps:给一个对象{id:113,name:'ybm3',age:21},，添加一个address属性
    //方式一：使用vue.set(obj,'newProp',169)    
    addInfo(state){
      // Vue.set(要修改对象,数组索引值|对象属性值,修改后的值)
      Vue.set(state.info,'address','洛杉矶')
    },
    //方式二：用新对象给旧对象重新赋值


    //mutations给全局变量删除某个属性,Ps:给一个对象{id:113,name:'ybm3',age:21},，删除一个age属性
    deleteIonfoSome(state,arrt){
      Vue.delete(state.info,arrt)
    },
    //mutations修改全局变量的某个值
    updateIofoSome(state){
      state.info.age=24
    },

    //补充：因为知道这mutations这里定义了方法，会在组件内调用，但是很多时候调用可能不小心就会把mutations内的方法名字写错。
    //所以官方推荐这里的mutations内的方法用常量定义，那么这样的就可以建立一个常量存放表mutations-type.js。
    //常量库里的样式就是多个 export const 属性大写=属性小写；
    //在引用的时候就import { 属性大写（也就是常量名）} form './mutations-types.js'
    //然后在使用常量名为方法名，使用的时候就像下边这么使用，在组件内的methods使用方法名也是一样的$route.commit(常量名)
    // [常量名](参数值){具体实现}
    [INCREMENTINFO](state){
      Vue.set(state.info,'address','洛杉矶')
    }
  },
  actions: {
    //actions，异步操作
    //类似mutations，是替代mutations做异步操作的比如setTimeout,ajax,axio，mutations内不能进行异步操作，因为不会被vue插件监听
    //actions内定义的方法都需要一个默认参数 actions：上下文  =》其实可以理解成store对象
    //然后在方法内调用mutations定义的方法 就是还是调用$store.commit(方法名)，但是context就是store对象，
    //所以直接 context.commit('方法名')就可以了
    //然后在组件内调用this.$store.dispatch('方法名')了。
    //理解；组件调用dispatch=>到vuex的actionn内=>方法内调用mutations内方法=>修改全局变量名。这样就可以同步
   
    //不带参数
    actionUpadateInfo(context){
      setTimeout(()=>{
        context.commit(INCREMENTINFO)
      },1000)
    },
    //带参数1，直接是值
    actionDeleteIonfoSome(context,arrt){
      setTimeout(() => {
        context.commit('deleteIonfoSome',arrt)
      }, 1000);
    },
    //带参数2 参数是对象,如果是对象，一般这都用payload
    actionDeleteIonfoSome2(context,payload){
      setTimeout(() => {
        context.commit('deleteIonfoSome',payload.arrt)
      }, 1000);
    },
    //补充：异步完成后调用传过的方法（其实所有方法都可以这么进行回调），回馈ok
    //就是利用ES6的Promise属性。以后记住，所有异步有事没有事都这么给他嵌套一个Promise。
    //在组件内正常调用action内方法，然后.then(()=>{})来回调就可以了
    //在这里就return Promise((resolve,reject)=>{做事，resolve(参数，可带可不带。)}),
    //然后在被return Promise后，因为内部调用后resolve就会立即调用它的then方法，所以最后就回到组件内方法后面的then方法了
    actionDeleteIonfoSome3(context,payload){
     return new Promise((resolve,reject)=>{
        setTimeout(() => {
          context.commit('deleteIonfoSome',payload.arrt)
          console.log(payload);
          resolve('ok')
        }, 1000);
      })
    },
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
    
    
    //getters带参数

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
    //模块的意思
    //Vue使用单一状态书，那么也意味着很多状态都交给Vuex来管理
    //当应用变得非常复杂时，store对象对象就用可能变得相当臃肿
    //为了解决这个问题。Vuex允许我们将store分割成模块（Module）,而每个模块拥有自己的state、mutations.actions.getters等
    a:{
      state:{
        //在模块里面定义的属性，其实他还是放到最外层的store的state里面
        //所以在组件内获取直接$stote.state.a.name
        name:'张三'
      },
      mutations:{
        //模块里面的mutations在组件内调用方法还是$store.commit('方法名'，参数名)直接提交值或$store.commit({type:'方法名'，参数名})对象形式
        //所以最好模块内定义方法名和store下的方法名不要一样。
        //运行实际是：她会先找modules有没有方法，有就调用，没有在去找store里面的
        updateName(state,name){
          state.name=name
        },
        updateName2(state,payload){
          state.name=payload.name
        }
      },
      actions:{
        //基本还是和state的action属性一样，
        //不同的是content所代表的对象这个模块对象。而不是store对象。但是里面有属性值可以拿到store里面的值，可以自己打印看
        //只是这里content.commit(只能是自己模块的mutations)，只是这里。
        //在组件内调用方式还是一样的使用$store.dispatch('方法名')或者$store.dispatch('方法名',参数)
        aUpdateName(context,name){
            return new Promise((resolve,reject)=>{
              setTimeout(() => {
                context.commit('updateName',name)
                resolve('ok')
              }, 1000);
            })
        }
      },
      getters:{
        //组件内调用还是和store下的getter一样的调用。$store.getters.方法名
        fullname(state){
          return state.name+'1111'
        },
        fullname2(state,getters){
          //这里还是可以把getters传进来当参数，但是这个getters就是modules内a模块的getters。
          return getters.fullname+'2222'
        },
        fullname3(state,getters,rootState){
          //如果需要使用store内的模块参数，模块内就有第三个参数，rootState（根的state）
          return getters.fullname2+rootState.counter
        }
      }
    }
  }

})


//导出store 对象
export default store;