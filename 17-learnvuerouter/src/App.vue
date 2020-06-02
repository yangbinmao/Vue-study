<template>
  <div id="app">
     <router-link to="/home" tag="button"  replace >首页</router-link>
     <router-link to='/about' tag="button" replace >关于</router-link>
     <button @click="homeClick">首页按钮</button>
     <button @click="aboutClick">关于按钮</button>
     <router-link v-bind:to="'/user/'+userId" tag="button"  replace >用户</router-link>
     <!-- <router-link to='/Profile' tag='button'>Profile</router-link> -->
     <router-link :to="{
       path:'/Profile',
       query:{
         name:'ybm',
         age:'18',
         height:'180'
        }
       }" 
       tag='button'>档案</router-link>
       <!--通过button时间进行页面跳转-->
       <!--在按钮时间中通过this.$router.push() 来进行页面跳转并且传递参数-->
       <button @click="UserClick">用户按钮</button>
       <button @click="ProfileClick">档案按钮</button>
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

      },
      UserClick(){
        //在User组件是通过$route.params.userId来获取 以/user/userid 这样的url形式获取参数值
        this.$router.push('/user/'+this.userId)
      },
      ProfileClick(){
        //在Profile组件是通过$route.query.name来获取 以/profile?name=ybm 这样的url形式获取参数值
        this.$router.push(
          {
          path: '/profile', 
            query:{
              name: 'ybm2',
              age: "11",
              height: '111'

            }
          }
        )
      }

  }
}
</script>

<style>
 .active{
   color: #f00;
 }
</style>
