<template>
  <div id="app">
    <tab-bar> 
      <tab-bar-item>
        <img  slot="item-icon" src="./assets/img/tabbar/logo.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/hk.jpg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img  slot="item-icon" src="./assets/img/tabbar/logo.png" alt="">
         <img slot="item-icon-active" src="./assets/img/tabbar/hk.jpg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>        
        <img  slot="item-icon" src="./assets/img/tabbar/logo.png" alt="">
         <img slot="item-icon-active" src="./assets/img/tabbar/hk.jpg" alt="">
        <div slot="item-text">购物车</div>
        </tab-bar-item>
      <tab-bar-item>
        <img  slot="item-icon" src="./assets/img/tabbar/logo.png" alt="">
         <img slot="item-icon-active" src="./assets/img/tabbar/hk.jpg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/tabbar/Tabbar.vue';
  import TabBarItem from './components/tabbar/TabBarItem.vue';

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import url('./assets/css/base.css');
 
</style>
