<template>
  <div class="GoodItem" @click="infoClick">
    <img
      class="item-img"
      v-lazy="goodsItem.image || goodsItem.show.img"
      @load="imgOnload"
    />
    <div class="info">
      <p class="p">{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="cfav">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   props:{
     goodsItem:null
   },
   methods: {
    //  1. 监听图片是否加载完毕 分发事件

      //2. 这个函数判断在home detail组件内分别发送当前组件的scroll的refresh函数
    //  imgOnload(){
    //    if(this.$route.path.indexOf('/home')){
    //      this.$bus.$emit('homeimgOnload')
    //    }else if(this.$route.path.indexOf('/detail')){
    //      this.$bus.$emit('detailimgOnload')
    //    }
    // 监听全部的页面加载
      imgOnload(){
        this.$bus.$emit('imgOnload')
      },
    //  2. 点击商品,跳转详情页
     infoClick(){
       this.$router.push('/detail/'+this.goodsItem.iid)
     }
   },
}
</script>

<style scoped>
.GoodItem {
  padding-bottom: 40px;
  position: relative;
}
.item-img {
  height: 100%;
  width: 100%;
  border-radius: 5px;
}
.info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 3px;
}
.price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.cfav {
  position: relative;
}
.cfav::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
