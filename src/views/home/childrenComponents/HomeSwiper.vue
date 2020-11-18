<template>
  <Swiper>
    <SwiperItem v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img class="image" :src="item.image" @load="imgLoad">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script type="text/ecmascript-6">
import {Swiper,SwiperItem} from 'components/common/swiper'
 export default {
   props:{
     banner:{
       type:Array,
       default(){
         return []
       }
     }
   },
  data(){
    return{
      isSwiperImg:false
    }
  },
  components:{
    Swiper,SwiperItem
   },
  //  1.监听图片加载事件
   methods:{
     imgLoad(){
      //  加载完成四次 分发事件一次
      if(!this.isSwiperImg){
         this.$emit('imgload')
         this.isSwiperImg='ture'
      }
     }
   }
}
</script>

<style>
.image{
  display: block;
}
</style>
