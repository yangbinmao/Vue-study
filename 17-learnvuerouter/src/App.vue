<template>
  <div id="app">
     <router-link to="/home" tag="button"  replace >首页</router-link>
     <router-link to='/about' tag="button" replace >关于</router-link>
     <button @click="homeClick">首页按钮</button>
     <button @click="aboutClick">关于按钮</button>
     <router-link v-bind:to="'/user/'+userId" tag="button"  replace >用户</router-link>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId: 'lisi'
    }
  },
    methods:{
    homeClick(){
      //通过代码的方式修改路径
        //方式一
        //push方法=>实际是在调用history.pushState方法 这个方式浏览器就有前进后退。
        // this.$router.push('/home')
        //方式二
        //replace方法=>实际是在调用history.replace方法 这个方式浏览器没有前进后退。
        this.$router.replace('/home')
    },
    aboutClick(){
       this.$router.replace('/about')
       // this.$router.push('/about')

    }

  }
}
</script>

<style>
 .active{
   color: #f00;
 }
</style>
