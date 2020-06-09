<template>
  <div id="app">
    <h2>-------------app内容-------------------</h2>
    <h2>{{message}}</h2>
    <h2>app内的couter:{{counter}}</h2>
    <h2>全局的counter:{{$store.state.counter}}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
     <button @click="addClick">++</button>
     <button @click="subClick">--</button>
    <!-- 没有vuex，传递参数只能用props来传递父子组件之间的参数 -->
    <!-- <hello-vuex :counter='counter'></hello-vuex> -->
    <!-- 使用vuex -->
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
      this.$store.commit('increment')
    },
    subClick() {
       this.$store.commit('decrement')
    }
  }

};
</script>

<style>
</style>
