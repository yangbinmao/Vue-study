<template>
  <div>
    <h2>全局的counter:{{$store.state.counter}}</h2>
    <h2>全局的more20stu:{{$store.getters.more20stu}}</h2>
    <h2>全局的info:{{$store.state.info}}</h2>
  </div>
</template>

<script>
export default {
 name: 'HelloVuex',
}
</script>

<style>

</style>