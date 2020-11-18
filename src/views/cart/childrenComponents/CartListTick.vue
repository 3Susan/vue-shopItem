<template>
  <div class="tick" :class="{checked: isChecked}">   
   <img src="~/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
       
    }
  },

  components: {

 },
}

</script>
<style scoped>
.tick{
  height: 20px;
  width: 20px;
  overflow: hidden;
  text-align: center;
  border-radius: 10px; 
  border: 1px solid #eee;
  position: relative;
  top: 40px;
  left: 2px;
}
.checked{
  background: red;
}
</style>