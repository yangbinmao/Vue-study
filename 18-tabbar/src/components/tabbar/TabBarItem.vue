<template>
  <div class="tab-bar-item">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1; /*使标签均等分 */
  text-align: center; /*文字水平居中 */
  font-size: 14px;
  height: 49px; /*一般手机导航栏的高度都是49px*/
}
.tab-bar-item img {
  margin-top: 3px;
  width: 24px;
  height: 24px;
  vertical-align: middle; /* 把此元素放置在父元素的中部。 */
  margin-bottom: 2px;
}

.active {
  color: red;
}
</style>