<template>
  <div id="app">
    <div id="tab-bar">
      <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  @import url('./assets/css/base.css');
  #tab-bar{
    display: flex;  /*设置 布局模式为弹性布局*/
    background-color: #f6f6f6;  /*设置导航栏背景色 */

    /*设置导航栏为最下边 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 10px 10px 10px rgba(red);
  }
  .tab-bar-item{
    flex: 1;/*使标签均等分 */
    text-align: center; /*文字水平居中 */
    height: 49px;/*一般手机导航栏的高度都是49px*/ 
  
  }
</style>
