<template>
  <div class="box1">
    <div class="item" v-for="(item,index) in 4" :key="index" @click="handlepage(index)" :class="{bgColor:currentIndex==index}">
      {{item}}
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data(){
    return{
      isShow:false,
      currentIndex:0
    }
  },
    methods:{
      handlepage(index){
        this.currentIndex=index
    }
  }
}
</script>

<style scoped>
.box1{
  height: 80px;
  width: 100%;
  background: #eee;
  display: flex;
}
.item{
  flex: 1;
  text-align: center;
}
.bgColor{
  background: red;
}
</style>

