<template>
  <div class="bottom-bar">  
     <div>
       <span>店铺</span>
     </div>
     <div>
       <span>客服</span>
     </div>
     <div>
       <span>收藏</span>
     </div>
     <div>
       <span class="cart" @click="addToCart">购物车</span>
     </div>
     <div>
       <span class="shopping">购买</span>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
       
    }
  },
  methods:{
    addToCart(){
      this.$emit('addToCart')
    }
  }
}

</script>
<style lang="less" scoped>
.bottom-bar{
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #FFF;
  z-index: 101;
  height: 49px;
  display: flex;
  justify-content: space-between;
  div{
    flex: 1;
    text-align: center;
    span{
      display: block;
      line-height: 49px;
      margin: 0 auto;
      font-size: 15px;
      font-weight: 700;
    }
  }
}
.cart{
  color: grey;
  background: yellowgreen;
}
.shopping{
  background:var(--color-high-text);
  color:#fff;

}
</style>