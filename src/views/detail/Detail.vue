<template>
  <div class="datail"> 
    <DetailNavBar class="nav-bar" @itemClick="handleTitle" ref="nav"/>
    <Scroll class="scroll" ref="scroll" :probe-type="3" @scrollTop='handletheme' >
      <DetailSwiper :topImages="topImg"/>
      <DetailItemInfo :goods="goods"/>
      <DetailShop :shops="shops" ref='shopStyle'/>
      <DetailShopstyle :shopStyle="detailInfo "  @handlePage="handlePage"/>
      <DetailGoodsInfo :params="params" ref='goodsinfo'></DetailGoodsInfo>
      <DetailComment :commentInfo="commentInfo"></DetailComment>
      <GoodsList :goods="recommend" ref="recommend"/>
    </Scroll>
    <DetailBottomBar @addToCart="addCart"></DetailBottomBar>
    <!-- <Toast :message="messages" :isShow="isShow"></Toast> -->
  </div>
</template>

<script>
import DetailNavBar from './childrenComponents/DetailNavBar'
import DetailSwiper from './childrenComponents/DetailSwiper'
import DetailItemInfo from './childrenComponents/DetailItemInfo'
import DetailShop from './childrenComponents/DetailShop'
import DetailShopstyle from './childrenComponents/DetailShopstyle'
import DetailGoodsInfo from './childrenComponents/DetailGoodsInfo'
import DetailComment from './childrenComponents/DetailComment'
import GoodsList from 'components/contents/goods/GoodsList'
import DetailBottomBar from './childrenComponents/DetailBottomBar'
// import Toast from 'components/common/toast/Toast'
import Scroll from 'components/common/scroll/Scroll'

import {getDetail , Goods , Shop ,GoodsParam, getRecommend} from 'network/detail.js'
import { debounce } from "common/utilis.js"
export default {
    name:'Detail',
    data() {
      return {
        id:String,
        topImg:[],
        goods:{},
        shops:{},
        detailInfo:{},
        params:{},
        commentInfo:{},
        recommend:[],
        listenImg:Function,
        topScrollY:[], //存放各个标题对应得offsetTop的值
        getTitleTopY:null,
        Scrolly:Number,
        currentIndex:'',
        count:0,
        // messages:'',
        // isShow:false
      }
    },
    components: {
    DetailNavBar,DetailSwiper,
    DetailItemInfo,DetailShop,
    DetailShopstyle,Scroll,
    DetailGoodsInfo,DetailComment,
    GoodsList,DetailBottomBar

  },
    created(){
      // 1. 路由界面拿到id值
      this.id=this.$route.params.iid


      // 2. 获取swiperImg 后端数据
      getDetail(this.id).then( res =>{
        
        res=res.result
        this.topImg=res.itemInfo.topImages
        // console.log(res);
      // 3.  封装商品信息组件
      this.goods=new Goods(res.itemInfo,res.columns,res.shopInfo.services)

      // 4.  封装商家信息
      this.shops=new Shop(res.shopInfo)

      // 5.  获取商品试穿信息
      this.detailInfo=res.detailInfo

      //  6. 获取商品属性信息
      this.params=new GoodsParam(res.itemParams.info,res.itemParams.rule)

      // 7.获取评论信息
      if(res.rate.cRate !== 0 ){
          this.commentInfo=res.rate.list[0]
        }
      })

    // 8.  获取推荐信息
      getRecommend().then(res =>{
        this.recommend=res.data.list
        // console.log(this.recommend)
      })



      // 第一次获取值不对，获取不到-this.$refs.goodsinfo.$e
      // 因为获取的时候各个组件还没渲染
      //  this.topScrollY=[]  
      //  this.topScrollY.push(0)
      //  this.topScrollY.push(-this.$refs.goodsinfo.$el.offsetTop)
      //  this.topScrollY.push(-this.$refs.shopStyle.$el.offsetTop)
      //  this.topScrollY.push(-this.$refs.recommend.$el.offsetTop)
      //  console.log(this.topScrollY);

      //  this.$nextTick(()=>{
      // 第二次获取：值不对
      // 值不对的原因：图片没有计算内
      // 根据最新的数据，对应的dom已经渲染，但是img还没被加载 获取到dom的高度
      // offsetTop值不对的时候，大部分都是图片没有加载完成
        // this.topScrollY=[]  
        // this.topScrollY.push(0)
        // this.topScrollY.push(-this.$refs.goodsinfo.$el.offsetTop)
        // this.topScrollY.push(-this.$refs.shopStyle.$el.offsetTop)
        // this.topScrollY.push(-this.$refs.recommend.$el.offsetTop)
        // console.log(this.topScrollY);
      // })

    },



    destroyed(){
      // 页面消失之后 取消监听imgOnload的监听
      this.$bus.$off('imgOnload',this.listenImg)
    },


    
    mounted(){
      const refresh = debounce(this.$refs.scroll.refresh,1000)
      // this.$bus.$on('detailimgOnload',() =>{
      //   refresh()
      // })
      this.getTitleTopY= debounce(()=>{
        this.topScrollY=[]  
        this.topScrollY.push(0)
        this.topScrollY.push(this.$refs.shopStyle.$el.offsetTop)
        this.topScrollY.push(this.$refs.goodsinfo.$el.offsetTop)
        this.topScrollY.push(this.$refs.recommend.$el.offsetTop)
        this.topScrollY.push(Number.MAX_VALUE)  //push进去一个最大值 可以不用else if直接使用
        // console.log(this.topScrollY);

      },100)
      // 刷新界面函数  外部定义：监听和销毁同时使用
      this.listenImg=() =>{
        refresh()
      }
      this.$bus.$on('imgOnload',this.listenImg)
    },




    // updated(){  //因为组件需要渲染 created mounted函数内都不能获取到对应组件的offsetTop的高度 可以在updated函数内
    //   this.topScrollY=[]  
    //    this.topScrollY.push(0)
    //    this.topScrollY.push(-this.$refs.goodsinfo.$el.offsetTop)
    //    this.topScrollY.push(-this.$refs.shopStyle.$el.offsetTop)
    //    this.topScrollY.push(-this.$refs.recommend.$el.offsetTop)
    // },



    methods:{
      // 1.  监听style图片加载完毕  刷新页面
    handlePage(){
      this.$refs.scroll.refresh()
      // 跳转对应的title后获取各个titleTopY的值 （进行防抖操作）
      this.getTitleTopY()
    },
    // 2.监听点击的title模块 使用scroll的scrollTo函数滚动到对应高度
    handleTitle(index){
      this.$refs.scroll.scrollTo(0,-this.topScrollY[index],100)
    },
    // 3.根据详情页的滚动联动效果标题 
    handletheme(position){
      this.Scrolly=-position.y
      for(var i=0;i<this.topScrollY.length;i++){    //let i in this.topScrollY  一样可以拿到数组的index
        if(i<this.topScrollY.length-1 && this.currentIndex !==i && this.Scrolly>this.topScrollY[i] && this.Scrolly<this.topScrollY[i+1]){
            this.currentIndex=i
            this.$refs.nav.CurrentIndex=this.currentIndex
            }
          // else if(i===this.topScrollY.length-1 &&this.Scrolly>this.topScrollY[i]){
          //    this.currentIndex=i
          //   this.$refs.nav.CurrentIndex=this.currentIndex
          // }
        }
    },
    // 4.  添加购物车
    addCart(){
      // 1.获取购物车需要展示的信息
      const cartInfo={}
      cartInfo.img=this.topImg[0]
      cartInfo.title=this.goods.title
      cartInfo.desc=this.detailInfo.desc
      cartInfo.id=this.id
      cartInfo.price=this.goods.realPrice
      cartInfo.count=this.count

      // 2. 将商品台南佳到购物车里
      // this.$store.state.cartList.push(cartInfo)
      // this.$store.commit('addCartPush',cartInfo) //mutations 提交

      // 3.添加购物车后出现提示信息  .then actions里边为异步函数可以用return new Promise
      this.$store.dispatch('addCartPush',cartInfo).then(res=>{
        // this.messages=res;
        // this.isShow=true;
        // setTimeout(()=>{
        //   this.isShow=false;
        //   this.messages=''
        // },1000)
        this.$toast.show(res,1000)
      })
      
    }
  }
} 
</script>
<style scoped>
.nav-bar{
  width: 100%;
  background: #ffffff;
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
}
.scroll{
  height: 100vh;
  margin-bottom: 49px;
  overflow: hidden;
}
</style>
