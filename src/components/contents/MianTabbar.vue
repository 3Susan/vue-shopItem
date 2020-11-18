<template>
  <div>
    <TabBar>
          <TabBarItem path="/home" textColor="red">
            <img slot="img" class="item-img" src="~assets/img/tabbar/tabbar/home.svg" alt="">
            <img slot="img-active" class="item-img" src="~assets/img/tabbar/tabbar/home_active.svg" alt="">
            <div slot="text" class="item-text">首页</div>
          </TabBarItem>
          <TabBarItem path="/category" textColor="red">
            <img slot="img" class="item-img" src="~assets/img/tabbar/tabbar/category.svg" alt="">
            <img slot="img-active" class="item-img" src="~assets/img/tabbar/tabbar/category_active.svg" alt="">
            <div slot="text" class="item-text">分类</div>
          </TabBarItem>
          <TabBarItem path="/cart" textColor="red">
            <img slot="img" class="item-img" src="~assets/img/tabbar/tabbar/shopcart.svg" alt="">
            <img slot="img-active" class="item-img" src="~assets/img/tabbar/tabbar/shopcart_active.svg" alt="">
            <div slot="text" class="item-text">购物车</div>
          </TabBarItem>
          <TabBarItem path="/profile" textColor="red">
            <img slot="img" class="item-img" src="~assets/img/tabbar/tabbar/profile.svg" alt="">
            <img slot="img-active" class="item-img" src="~assets/img/tabbar/tabbar/profile_active.svg" alt="">
            <div slot="text" class="item-text">我的</div>
          </TabBarItem>
        </TabBar>
  </div>
</template>

<script type="text/ecmascript-6">
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
      components:{
        TabBar,TabBarItem
    }
  }
</script>

<style>

</style>
