<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType:{
        type:Number,
        default:0
      },
      pullType:{
        type:Boolean,
        default(){
          return false
        }
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      // 1. 创建Bscroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType:this.probeType,
        click:true,
        pullUpLoad:this.pullType
      })
      // 2. 监听滚动位置
      this.scroll.on('scroll',(position)=>{
        this.$emit('scrollTop',position)
      });
      // 3. 监听scroll滚动到底部
      if (this.pullType){
        this.scroll.on("pullingUp",()=>{
        this.$emit("pullingUp")
      })
      }
    },
    methods:{
      // 1. 回到顶端函数
      scrollTo(x,y,time){
      this.scroll.scrollTo(x,y,time)
      },
      // 2. 重新计算滚动高度 
      refresh(){
      this.scroll && this.scroll.refresh()
      },
      // 3. 完成加载内容
      finishpullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      // 4. 获取页面高度
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>
