<template>
  <div id="app">
    <h2>-------------app内容-------------------</h2>
    <h2>app内的message:{{message}}</h2>
    <h2>app内的couter:{{counter}}</h2>
    <h2>全局的counter:{{$store.state.counter}}</h2>
    <h2>----------VueX的state属性------------</h2>
     <button @click="addClick">++</button>
     <button @click="subClick">--</button>
     <button @click="subCountClick(5)">++5</button>

    <!-- 使用vuex -->
    <h2>------------Vuex的getters属性---------------</h2>
    <!-- 需要对全局属性（vuex里的store）内的值进行操作但不改变本身值并且输出，使用它的getters方法（类似vue的计算属性（computed）） -->
    <!--使用$store.getters.getters内的方法名   因为是计算属性。所以不需要加（）和vue一样 -->
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <!--在getters方法里面定义方法，把自己放进去 -->
    <h3>在getters方法里面定义方法，把自己放进去</h3>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <!-- getters筛选带参数的情况 -->
    <h3>getters筛选带参数的情况 </h3>
    <h2>{{$store.getters.moreAgeStu(19)}}</h2>
    <h2>-------------hello Vuex内容-------------------</h2>
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
      this.$store.commit('incrementCount',count)
    }
  }

};
</script>

<style>
</style>
