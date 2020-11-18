<template>
  <div class="bottom">
    <div class="bottom-tick">
      <CartListTick class="tick" 
      :isChecked="isSelectAll" 
      @click.native="handleSelectAll"/>
      <span>全选</span>
    </div>
    <div class="computed">
      <span>合计:￥{{ price }}</span>
    </div>
    <div class="ToComputed" @click="handleComputed">
      <span class="ToComputed-sapn">去计算</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CartListTick from "./CartListTick";
export default {
  components: {
    CartListTick,
  },
  computed: {
    ...mapState(["cartList"]),
    price() {
      return this.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return item.price * item.count + preValue;
        }, 0);
    },
    // 三种方法判断是否全选
    isSelectAll() {
      // 1.使用filter
      // if(this.cartList.length===0) return false
      // return !this.cartList.filter(item => !item.checked).length

      // 2. 使用find
      //  if(this.cartList.length===0) return false
      //   return !this.cartList.find(item => !item.checked)

      // 3.使用for循环
      for (let item of this.cartList) {
        if (item.checked === false) {
          return false;
        }
      }
      return true;
    },
  },
  methods:{
    // 1.点击全选按钮


    handleSelectAll(){
      if(this.isSelectAll){ // 判断是否全部选中
        this.cartList.forEach(item => {
          item.checked=false    //全部为false
        });
      }else{
        this.cartList.forEach(item =>{item.checked=true}) //全部为true
      }

      // this.cartList.forEach(item => {
      //   item.checked=!item.checked
      // });
    },
    handleComputed(){
    //  提示勾选商品 提交订单
      if(!this.cartList.find(item => item.checked===true)){
        this.$toast.show("请勾选商品",1500)
      }
    }
  }
};
</script>
<style lang="less" scoped>
.bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 40px;
  display: flex;
  font-size: 15px;
  .bottom-tick {
    display: flex;
    justify-content: start;
    .tick {
      position: relative;
      top: 10px;
      left: 4px;
    }
    span {
      margin-left: 8px;
      line-height: 40px;
    }
  }
  .computed {
    line-height: 40px;
    font-weight: 550;
    margin-left: 15px;
    width: 100px;
  }
  .ToComputed {
    position: relative;
    left: 60px;
    margin: auto;
    line-height: 40px;
    height: 35px;
    width: 80px;
    background: orange;
    text-align: center;
  }
  .ToComputed-sapn {
    font-weight: 550;
    color: white;
  }
}
</style>
