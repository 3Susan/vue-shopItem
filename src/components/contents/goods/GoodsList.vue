<template>
  <div class="goodsList">
    <GoodItem 
    :goodsItem="item" 
    v-for="(item,index) in goods" 
    :key="index"
    class="GoodItem"></GoodItem>
  </div>
</template>

<script type="text/ecmascript-6">
import GoodItem from './GoodItem'
 export default {
   props:{
     goods:Array,
     default(){
       return []
     }
   },
   components:{
     GoodItem
   }
}

</script>

<style>
.goodsList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3px;
}
.GoodItem{
  width: 48%;
}

</style>
