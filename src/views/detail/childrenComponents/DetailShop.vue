<template>
  <div class="shops" v-if="Object.keys(shops).length !== 0">
    <div class="shop-top">
      <img :src="shops.logo" />
      <span class="shopInfo">{{ shops.name }}</span>
    </div>
    <div class="shop-left">
      <div class="shop-left-count">
        <span>{{ shops.sells }}</span>
        <span>{{ shops.goodsCount }}</span>
      </div>
      <div class="shop-left-title">
        <span>总销量</span>
        <span>全部宝贝</span>
      </div>
    </div>
    <span class="line"></span>
    <div class="shop-right">
      <table>
        <tr class="item" v-for="(item, index) in shops.score" :key="index">
          <td>{{ item.name }}</td>
          <td class="score" :class="{ 'score-better': item.isBetter }">
            {{ item.score }}
          </td>
          <td class="better" :class="{ 'better-more': item.isBetter }">
            <span>{{ item.isBetter ? "高" : "低" }}</span>
          </td>
        </tr>
      </table>
    </div>
    <div class="shop-bottom">
      <div class="shop-data">
        进店逛逛
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    shops: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  components: {},
};
</script>
<style lang="less" scoped>
  .shop-bottom{
    position: relative;
    top: -44px;
  } 
  .shop-data{
    margin: 0 auto;
    background: #eeeeee;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    width: 40%;
    border-radius: 13px;
  }

.shop-right{
  position: relative;
  left: 60%;
  top: -60px;
  .item{
    line-height: 17px;
    text-align: center;
    .score{
      padding-left: 20px;
      color: #5ea732;
    }
    .score-better{
      color: #f13e3a;
    }
    .better{
      // text-align: center;
      text-align: center;
      position: relative;
      left: 20px;
      padding:0 3px;
      border-radius: 2px;
      color: #fff;
      background: #5ea732;
    }
    .better-more{
      background: #f13e3a;
    }
  }
}






.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shops {
  background: #fff;
  border-bottom: 3px solid #eee;
  height: 195px;
}
.shop-top {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
.shop-top img {
  display: inline-block;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  border: 2px solid rgba(100, 100, 100, 0.15);
  margin-left: 10px;
  margin-right: 10px;
}
.shopInfo {
  font-size: 18px;
}
.shop-left-count {
  position: relative;
  left: 30px;
  top: 10px;
  width: 130px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
}
.shop-left-title {
  position: relative;
  left: 35px;
  top: 23px;
  width: 36%;
  font-size: 10px;
  display: flex;
  justify-content: space-between;
}
.line {
  display: block;
  position: relative;
  top: -15px;
  left: 50%;
  height: 35px;
  width: 2px;
  background: rgba(100, 100, 100, 0.3);
}

</style>
