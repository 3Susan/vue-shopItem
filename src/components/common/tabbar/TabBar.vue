<template>
  <div>
    <div class="tabbar">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
}
</script>

<style>
.tabbar{
  display: flex;
  height: 49px;
  background: #f3f3f3;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, .15);  
  /* 上边框阴影  box-shadow */
}


</style>

