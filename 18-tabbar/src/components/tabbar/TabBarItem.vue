<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- <div :class="{active: isActive}"><slot name="item-text"></slot></div> -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>

  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path: String,
    activeColor: {
      type: String,
      default: 'red',
    }
  },
  data() {
    return {
    
    };
  },
  computed:{
      isActive(){
          //利用indexOf()方法判断当前路由内有没有，有就返回下标，没有返回-1，
          return this.$route.path.indexOf(this.path)!=-1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }

  },
  methods:{
    itemClick(){
      this.$router.replace(this.path);
    }
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