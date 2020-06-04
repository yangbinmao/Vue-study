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
        message: '你好啊',
        path: '/Home/news'
      }
    },
    //常用的vue钩子函数
    created () {
      console.log("created");

    },
    mounted () {
      console.log("mouted");

    },
    updated () {
      console.log("update");

    },
    destroyed(){
      console.log('销毁的后，destroyed');
    },

    //利用Vue的activated()函数和vue-router的组件内守卫记录当前组件导航地址
    activated(){
      //组件活跃的时候
      this.$router.push(this.path)
    },
    beforeRouteLeave (to, from, next) {
      //导航离开该组件的对应路由时调用
      this.path=this.$route.path
      next()
    },
    created(){
      console.log(' Home created(创建)');
    },
    destroyed(){
      console.log(' Home destroyed(销毁)');
    }

  }

</script>

<style>
</style>
