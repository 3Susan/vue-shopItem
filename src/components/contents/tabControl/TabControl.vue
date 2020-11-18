<template>
  <div class="tabControl">
    <div v-for="(item,index) in title"
     :key="index"
      class="item" 
      :class="{active:CurrentIndex==index}"
      @click="handleIndex(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   props:{
     title:{
       type:Array,
       default(){
         return []
       }
     }
   },
   data(){
     return {
       CurrentIndex:0
     }
   },
   methods:{
     handleIndex(index){
       this.CurrentIndex=index
       this.$emit('tabClick',index)
     }
   }
}
</script>

<style>
.tabControl{
  display: flex;
  text-align: center; 
  height: 34px;
  font-size: 15px;
}
.item{
  /* flex: 1; */
  line-height: 10px;
}
.item span{
  padding-bottom: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 2px solid var(--color-high-text);
}
</style>
