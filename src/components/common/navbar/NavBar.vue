<template>
  <div id="navbar">
    <div class="left"><slot name='left'></slot></div>
    <div class="center"><slot name='center'></slot></div>
    <div class="right"><slot name='right'></slot></div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
}
</script>

<style>
  #navbar{
    display: flex;
    height: 44px;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
  }
  .left{
    width: 50px;
  }
  .right{
    width: 50px;
  }
  .center{
    flex: 1;
    line-height: 44px;
    font-size: 20px;
  }
</style>
