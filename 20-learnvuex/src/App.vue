<template>
  <div id="app">
    <h1>-------------app内容-------------------</h1>
    <h2>app内的message:{{message}}</h2>
    <h2>app内的couter:{{counter}}</h2>


    <h2>----------VueX的state属性------------</h2>
    <h2>全局的counter:{{$store.state.counter}}</h2>


   <h2>----------VueX的mutations属性：修改全局变量的值的方法--------</h2>
    <h3>VueX的mutations属性不带参数</h3>
     <button @click="addClick">使全局变量counter+1</button>
     <button @click="subClick">使全局变量counter-1</button>
     <h2>全局的info:{{$store.state.info}}</h2>
     <button @click="addInfo">给全局变量info动态添加学生</button>
     <h3>VueX的mutations属性带参数</h3>
     <button @click="addCountClick(5)">使全局变量counter+5</button>
     <button @click="addCountClick(10)">使全局变量counter+10方式一</button>
     <button @click="addCountClick2(10)">使全局变量counter+10方式二</button>
     <button @click="addstu">使全局变量students添加学生</button>
     <button @click="deleteIonfoSome('age')">删除全局变量info的age属性</button>
    <!-- 使用vuex -->
    <h2>------------Vuex的getters属性：获取经过处理后的全局变量参数值，但是不改变本身值的大小---------------</h2>
    <!-- 需要对全局属性（vuex里的store）内的值进行操作但不改变本身值并且输出，使用它的getters方法（类似vue的计算属性（computed）） -->
    <!--使用$store.getters.getters内的方法名   因为是计算属性。所以不需要加（）和vue一样 -->

    <h2>VueX通过getters获取powerCounter值：{{$store.getters.powerCounter}}</h2>
    <h2>VueX通过getters获取more20stu值：{{$store.getters.more20stu}}</h2>
    <!--在getters方法里面定义方法，把自己放进去 -->
    <h3>在getters方法里面定义方法，把自己放进去</h3>
    <h2>VueX通过getters获取more20stuLength值：{{$store.getters.more20stuLength}}</h2>
    <!-- getters筛选带参数的情况 -->
    <h3>getters筛选带参数的情况 </h3>
    <h2>{{$store.getters.moreAgeStu(19)}}</h2>
    <h1>-------------hello Vuex内容-------------------</h1>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>

import HelloVuex from "./components/HelloVuex";
export default {
  name: "App",
  data() {
    return {
      message: '我是App组件',
      counter: 0

    };
  },
  components: {
    HelloVuex
  },

  methods:{
    addClick(){
      //需要对全局属性（vuex里的store）进行进行操作或者改变转状态
      //使用this.$store.commit('方法名')
      
      this.$store.commit('increment')
    },
    subClick() {
       this.$store.commit('decrement')
    },
    addCountClick(count){
      //vuex:mutations(修改全局变量带参数)提交方式一，普通提交风格(参数就是参数本身)
      this.$store.commit('incrementCount',count)
 
    },
    addCountClick2(count){
     //vuex:mutations(修改全局变量带参数)提交方式二，对象形式提交风格风格.
      //注意变化形式后，传过去的值实际是整个commit对象。意思就是在对应的incrementCount方法里要用是形参.count.
       this.$store.commit({
        type:'incrementCount2',
        count
       })
    },
    addstu(){
      //给全局变量添加学生
      this.$store.commit('addStudent',{id:114,name:'ybm4',age:22})
      
    },
    addInfo(){
      //给全局变量info动态条件属性
      this.$store.commit('addInfo')
    },
    deleteIonfoSome(attr){
      //删除全局变量的某个属性
      this.$store.commit('deleteIonfoSome',attr)
    }
  }

};
</script>

<style>
</style>
