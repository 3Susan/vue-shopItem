<template>
  <Swiper class="Swiepr" v-if="topImages.index !== 0">
    <SwiperItem v-for="(img,index) in topImages"  :key="index"> 
        <img  :src="img">
    </SwiperItem>
  </Swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'
export default {
  data() {
    return {
       
    }
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    SwiperItem,Swiper
 },
}

</script>
<style scoped>
.Swiepr{
  height: 300px;
}
</style>