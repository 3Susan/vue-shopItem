<template>
  <div v-if="Object.keys(shopStyle).length !== 0">  
    <div class="style">
      <div class="desc">
        <span>{{shopStyle.desc}}</span>
      </div>
      <span class="key">{{shopStyle.detailImage[0].key}}</span>
    </div>
    <div >
      <ul>
        <li v-for="(item,index) in shopStyle.detailImage[0].list" :key="index"> 
          <img  @load="handlePage" class="img" :src="item" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CurrentIndex:0 
    }
  },
  props:{
    shopStyle:{
      type:Object,
      defalut(){
        return {}
      }
    }
  },
  components: {

 },
 methods:{
   handlePage(){
    // 1. 图片加载长度等于数组图片长度分发事件
     if(++this.CurrentIndex === this.shopStyle.detailImage[0].list.length){
       this.$emit('handlePage')
     }
   }
 }
}

</script>
<style scoped>
.style{
  margin: 15px 0;
}
.desc{
  margin: 0 auto;
  height: 45px;
  width: 95%;
  font-size: 13px;
  padding-top: 8px;
  border-top: 1px solid rgba(100,100,100,.5);
  border-bottom: 1px solid rgba(100,100,100,.5);
}
.key{
  position: relative;
  left: 10px;
  top: 8px;
  font-size: 13px;
}
.img{
  width: 100%;
}
</style>