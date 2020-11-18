<template>
  <div class="cart">
    <CartNavBar></CartNavBar>
    <Scroll class="scroll" ref="scroll">
      <CartList
        v-for="(item, index) in cartList"
        :key="index"
        :itemInfo="item"
      ></CartList>
    </Scroll>
    <CartBottom></CartBottom>
  </div>
</template>

<script>
import CartNavBar  from './childrenComponents/CartNavBar'
import CartList  from './childrenComponents/CartList'
import CartBottom from './childrenComponents/CartBottom'
import Scroll from 'components/common/scroll/Scroll'

import {mapState} from 'vuex'

 export default {
   components:{
     CartNavBar,Scroll,CartList,CartBottom
   },
   activated(){
    //  1.进来页面后 刷新页面可滚动的高度
    this.$refs.scroll.refresh()
   },
   data(){
     return {

     }
   },
   computed :{
    //  cartList(){
    //   //  return this.$store.state.cartList
    //  },
     ...mapState({
       cartList:"cartList",
     })
   }

}
</script>

<style>
.scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
}
</style>
