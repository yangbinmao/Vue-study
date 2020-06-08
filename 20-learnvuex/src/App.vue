<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{counter}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
     <button @click="$store.state.counter++">++</button>
    <!-- 没有vuex，传递参数只能用props来传递父子组件之间的参数 -->
    <!-- <hello-vuex :counter='counter'></hello-vuex> -->
    <!-- 使用vuex -->
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
  }

};
</script>

<style>
</style>
