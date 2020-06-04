<template>
  <div>
    <h2>我是Profile</h2>
    <p>我是Profile的内容，啦啦啦啦</p>
    <!--获取传过来的参数$route.query.对象名称-->
    <p>{{$route.query.name}}</p><!--只接用-->
    <!--使用计算属性接收后使用，两种方式都是可以的-->
    <p>{{peoole}}</p>

  </div>
</template>

<script>
  export default {
    name: 'Profile',
    computed: {
      peoole(){
        return this.$route.query
      }
    },
    created(){
      console.log(' Profile created(创建)');
    },
    destroyed(){
      console.log(' Profile destroyed(销毁)');
    }



  }
</script>

<style>

</style>
