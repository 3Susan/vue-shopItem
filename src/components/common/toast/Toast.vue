<template>
  <div class="tips" v-show="this.isShow">  
    <div >
      {{message}} 
    </div>
  </div>
</template>

<script>
export default {
  // props:{
  //   message:{
  //     type:String,
  //     default:''
  //   },
  //   isShow:{
  //     type:Boolean,
  //     default:false
  //   }
  // },
  data() {
    return {
     message:'',
     isShow:false  
    }
  },
  methods:{
    show(message="哈哈哈",duration=1500){  //es5形参默认值
      this.message=message,
      this.isShow=true,
      setTimeout(()=>{
        this.isShow=false
      },duration)
    }
  }
}

</script>
<style lang="less" scoped>
  .tips{
    background: rgba(0, 0, 0, .65);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    color:white;
    font-weight: 550;
    padding: 8px 15px;
    border-radius: 5px;
  }
</style>
