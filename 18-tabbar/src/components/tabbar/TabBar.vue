<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TabBar'

}
</script>

<style scoped>
  #tab-bar{
    display: flex;  /*设置 布局模式为弹性布局*/
    background-color: #f6f6f6;  /*设置导航栏背景色 */

    /*设置导航栏为最下边 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /*设置框框阴影 */
    box-shadow: 0px -1px 1px rgba(100,100,100,0.8);
   }
  
</style>