<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户相关的信息，嘿嘿嘿</p>
    <!--$route.params.参数名字  获取router的url动态数据-->
    <h2>{{$route.params.userId}}</h2>

    <h2>{{useId}}</h2>

    <button @click="btnClik">获取$route</button>
  </div>
</template>

<script>
  export default{
    name:'Uesr',
    computed:{
      useId(){
        return this.$route.params.userId
      }
    },
    methods: {
      btnClik(){
        console.log(this.$route)
        console.log(this.$router);
      }
    },
    created(){
      console.log(' User created(创建)');
    },
    destroyed(){
      console.log(' User destroyed(销毁)');
    }
  }
</script>

<style>
</style>
