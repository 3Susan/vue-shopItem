<template>
  <div id="app">
      <keep-alive exclude="Detail">
        <router-view></router-view>
      </keep-alive>
      <MianTabbar></MianTabbar>
  </div>
</template>

<script>


import MianTabbar from 'components/contents/MianTabbar'
export default {
  components:{
    MianTabbar
  }
}
</script>

<style>
  @import 'assets/css/rebase.css';

</style>
