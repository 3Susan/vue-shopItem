<template>
  <div>
    <div class="home">
      <NavBar class="home-nav">
        <div slot="center"><div class="center">购物街</div></div>
      </NavBar>
    </div>
    <TabControl ref="tabControl1"  class="TabControl" v-show="isShowTabControl"
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></TabControl>
    <Scroll class="contents" ref="scroll" @scrollTop="handleScroll" :probeType='3' :pullType="true" @pullingUp="handlePullingUp">
      <HomeSwiper :banner="banner" class="HomeSwiper" @imgload="handleSwiperImg"></HomeSwiper>
      <HomeRecommend :recommend="recommend"></HomeRecommend>
      <Feature></Feature>
      <TabControl ref="tabControl2"
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></TabControl>
      <GoodsList :goods="this.goods[currentType].list"></GoodsList>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShowBack"></BackTop>
  </div>
</template>

<script type="text/ecmascript-6">

import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childrenComponents/HomeSwiper'
import HomeRecommend from './childrenComponents/HomeRecommend'
import Feature from './childrenComponents/Feature'
import TabControl from 'components/contents/tabControl/TabControl'
import GoodsList from 'components/contents/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/contents/backTop/BackTop'
//获取后端数据
import { getHomeMultidata ,getHomeGoods } from "network/home"
import { debounce } from "common/utilis.js"
 export default {
   components:{
     NavBar,HomeSwiper,HomeRecommend,Feature,TabControl,GoodsList,Scroll,BackTop
   },
   data(){
     return {
       result:null,
       banner:[],
       recommend:[],
       goods:{
         'pop':{page:0, list:[]},
         'new':{page:0, list:[]},
         'sell':{page:0, list:[]},
       },
       currentType:'pop',
       isShowBack:false,
       tabOffsetTop:0,
       isSwiperImg:false,
       isShowTabControl:false,
       CurrentTop:0,
       listenImg:Function
     }
   },
  created() {
    // 请求多个数据
    this.getHomeMultidata()

    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  // 销毁页面后
  destroyed(){
    console.log("离开销毁");
  },
  // 进来后(执行scrollTo函数页面至高度)
  activated(){
    this.$refs.scroll.scrollTo(0,this.CurrentTop,0)
    // 执行之后刷新界面,重新计算滚动高度
    this.$refs.scroll.refresh()
  },
  
  deactivated(){
    // 离开后(保存一个离开后的高度)
    this.CurrentTop=this.$refs.scroll.getScrollY()

    //离开后 销毁监听imgOnload的监听   
    this.$bus.$off('imgOnload',this.listenImg)
  },
  mounted(){
    // 1. 图片加载完成事件监听 
    const refresh=debounce(this.$refs.scroll.refresh,1000)
    // this.$bus.$on('homeimgOnload',()=>{
    //   refresh()
    // })


    //  this.$bus.$on('imgOnload',()=>{
    //    this.$refs.scroll.refresh()
    // })
    // 刷新界面函数  外部定义：监听和销毁同时使用
    this.listenImg= ()=>{
      refresh()
    }
    this.$bus.$on('imgOnload',this.listenImg)

  },
  methods:{

    // 获取后端的数据
    // 1. 获取首页轮播图数据
    getHomeMultidata(){
      getHomeMultidata().then(res =>{
        this.banner=res.data.banner.list
        this.recommend=res.data.recommend.list
      })
    },
    // 2. 获取首页商品数据
    getHomeGoods(type){
      const page = this.goods[type].page+1  //难点 this.goods[type]
      getHomeGoods(type,page).then(res=>{
        // 数组得三种遍历方法

        // const arr = res.data.list;
        // for(var i=0;i<arr.length;i++){
        //   this.goods[type].list.push(arr[i])
        // }

        // for(let item of res.data.list){
        //   this.goods[type].list.push(item)
        // }

        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        
        //完成上拉加载更多
        this.$refs.scroll.finishpullUp()

      })
    },


    // 首页的方法
    // 1. 根据点击的index获取对应的type
    tabClick(index){
      switch(index){
        case 0:
          this.currentType='pop'
          break;
        case 1:
          this.currentType='new'
          break;
        case 2:
          this.currentType='sell'
      }
      // 同步信息两个tabControl组件
      this.$refs.tabControl1.CurrentIndex=index
      this.$refs.tabControl2.CurrentIndex=index
    },
  
    // 2. 点击回到首页顶管
    //  监听组件的方法 @事件.native="事件函数"
    backClick(){
      // console.log(this.$refs.scroll.scrollTo);
      // this.$refs.scroll.scroll.scrollTo(0,0,1000) 
      //通过ref拿到scroll组件，然后在拿到scroll对象的scrollTo(x,y,time)

       this.$refs.scroll.scrollTo(0,0,500) 
       //通过ref拿到scroll组件 组件内部methods有scrollTo方法调用
    },
    // 3. 根据position.Y的值判断图标是否显示隐藏
    handleScroll(position){
      const scrollY=position.y
      // console.log(scrollY);
      if(scrollY<-1000){
        this.isShowBack=true
      }else{
        this.isShowBack=false
      }
      // 4.根据滚动的高度和tabControl组件offsetTopp判断tabControl是否显示和隐藏
      if(-scrollY>this.tabOffsetTop){
        this.isShowTabControl=true
      }else{
        this.isShowTabControl=false
      }
    },
    // 4. 下拉获取更多数据
    handlePullingUp(){
      this.getHomeGoods(this.currentType)
    },
    // 5. 获取tabControl的offsetTop
    handleSwiperImg(){
    // 所有组件都有一个属性$el: 用于获取组件元素
    // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }

  },
}
</script>

<style scoped>
.home {
  position: relative;
  /* height: 100vh; */
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; 
}
.image {
  width: 100%;
}
/* 吸顶效果
      position:sticky 配合 top:  属性 可以让某一个模块滚动时固定位置 */
/* .tab-control {
  position: sticky;
  top: 44px;
  background: #fff;
  z-index: 9;
} */

.contents { 
  /* height: 500px; */
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom:49px;
  left: 0;
  right: 0;
}
.TabControl{
  margin-top: 44px;
  position: relative;
  z-index: 9;
  background: #fff;
}
</style>
