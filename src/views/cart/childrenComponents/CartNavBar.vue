<template>
  <div class="cart-navbar">
    <NavBar>
      <!-- <div slot="center">购物车({{this.CartLength}})</div> -->
      <div slot="center">购物车({{Length}})</div>
    </NavBar>
 </div>
</template>

<script type="text/ecmascript-6">
import NavBar  from 'components/common/navbar/NavBar'
import { mapGetters} from 'vuex'
 export default {
   components:{
     NavBar
   },
   computed:{
    //  CartLength(){
    //    return this.$store.getters.cartLength
    //  }
    // getters 三种获取使用方法
    // 1. this. $store.getters.getter的名字
    // 2. 当前组件 import {mapGetters} from 'vuex' computed中...mapGetters([$store.getters.getter的名字])
    // ...mapGetters([
    //   'cartLength'
    // ])
    // 3.当前组件 import {mapGetters} from 'vuex' computed中...mapGetters({name:'getters的name',})
    ...mapGetters({
      Length:'cartLength',
    })
   }
}
</script>

<style >
.cart-navbar{
  background: var(--color-tint);
  color: #ffffff;
}
</style>

