<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="item">
      <a href="item.link">
        <img class="image" :src="item.image">
        <div class="title">{{item.title}}</div>
      </a>
    </div>
 </div> 
</template>

<script type="text/ecmascript-6">
 export default {
   props:{
     recommend:{
       type:Array,
       default(){
         return []
       }
     }
   }
}
</script>

<style >
  .recommend{
    display: flex;
    padding:8px 0 15px;
    border-bottom:10px solid  #eee
  }
  .item{
    flex:1;
    padding:10px 3px 0 ;
    text-align: center;
  }
  .image{
    width: 100%;
  }
  .title{
    font-size: 12px;
    padding-top: 10px;
  }
</style>
