<template>
  <tab-bar> 
      <tab-bar-item path='/home' activeColor='blue'>
        <img  slot="item-icon" src="~assets/img/tabbar/logo.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/hk.jpg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img  slot="item-icon" src="~assets/img/tabbar/logo.png" alt="">
         <img slot="item-icon-active" src="~assets/img/tabbar/hk.jpg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>        
        <img  slot="item-icon" src="~assets/img/tabbar/logo.png" alt="">
         <img slot="item-icon-active" src="~assets/img/tabbar/hk.jpg" alt="">
        <div slot="item-text">购物车</div>
        </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img  slot="item-icon" src="~assets/img/tabbar/logo.png" alt="">
         <img slot="item-icon-active" src="~assets/img/tabbar/hk.jpg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from 'components/tabbar/TabBar';
  import TabBarItem from './TabBarItem';

  export default {
   name: 'MainTabBar',
   components: {
      TabBar,
      TabBarItem
   
    }
  }
</script>

<style scoped>

</style>