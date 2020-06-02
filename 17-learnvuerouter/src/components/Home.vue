<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <router-link to='/home/news' tag="button">新闻</router-link>
    <router-link to='/home/message' tag='button'>消息</router-link>
    <router-view></router-view>

    <input type="text" v-model="message">
  </div>
</template>

<script>
  export default {
    name: "Home",
    data () {
      return {
        message: '你好啊'
      }
    },
    created () {
      console.log("created");
      document.title='首页';
    },
    mounted () {
      console.log("mouted");
      
    },
    updated (old,news) {
      console.log("update");
      
    }
  }
  
</script>

<style>
</style>
