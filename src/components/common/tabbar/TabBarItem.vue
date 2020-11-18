<template>
  <div class="tabbar-item" @click="handlePage">
    <div v-if="!isActive"><slot name="img"></slot></div>
    <div v-else><slot name="img-active"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   props:{
     path:String,
      textColor:String
   },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive? {color:this.textColor} : {}
    }
  },
   methods:{
     handlePage(){
       this.$router.push(this.path)
     }
   }
}
</script>


<style>
.tabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.item-img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  /* 图片下面多三个像素 留白  vertical-align: middle; */
  margin-bottom: 2px;
}
</style>

