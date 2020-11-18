<template>
  <div class="cart-list">  
    <div class="list-item">
      <CartListTick :isChecked="itemInfo.checked" class="tick" @click.native="handleClick"/>
      <div class="kind">
        <div class="left">
          <img class="img" :src="itemInfo.img" alt="">
        </div>
        <div class="right">
          <div class="top">
            <span class="title">{{itemInfo.title}}</span>
            <span class="desc">{{itemInfo.desc}}</span>
          </div>
          <div class="bottom">
            <span class="price">￥{{itemInfo.price}}</span>
            <span class="count">x{{itemInfo.count}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartListTick from './CartListTick'
export default {
  props:{
    itemInfo:{
      type:Object
    }
  },
  components:{CartListTick},
  methods:{
    handleClick(){
      this.itemInfo.checked = !this.itemInfo.checked
    }
  }
}

</script>
<style lang="less" scoped>
.list-item{
  display: flex;
  justify-content: start;
  border-bottom: 2px solid #eee;
}
.kind{
  width: 100%;
  display: flex;
  .left{
    justify-content: space-between;
    height: 100px;
    width: 80px;
    
    .img{
      display: block;
      margin:auto;
      width: 100%;
      height: 100%;
      padding: 5px ;
      border-radius: 10px; 
    }
  }
  .right{
    flex:1;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    justify-content: space-between;
    margin-top:5px;
    .top{
      .title{
        justify-content: space-between;
        display: block;
        margin-top: -10px;
        font-size: 18px;
        margin-bottom: 3px;
        overflow: hidden;
        white-space: nowrap; 
        text-overflow: ellipsis;
      }
      .desc{
        overflow: hidden;
        white-space: nowrap; 
        text-overflow: ellipsis;
        display: block;
        font-size: 10px;
        color:rgba(182, 179, 179, 0.986);
        margin-top: 8px;
      }
    }
    .bottom{
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      .price{
        color: var(--color-high-text);
        margin-bottom: 5px;
      }
      .count{
        margin-right: 15px;
      }
    }
  }
}
  
</style>