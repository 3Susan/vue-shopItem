<template>
  <NavBar id="navbar">
    <div slot="left" @click="back" class="back">
      <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <div slot="center" class="titles">
      <div
        v-for="(item, index) in titles"
        :key="index"
        class="item"
        @click="itemClick(index)"
        :class="{ active: index === CurrentIndex }"
      >
        {{ item }}
      </div>
    </div>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      titles: ["商品", "商店", "参数", "推荐"],
      CurrentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    itemClick(index) {
      //  console.log("111")
      this.CurrentIndex = index;
      // 1. 点击对应的title传入index
      this.$emit("itemClick", index);
    },
    //  2. 返回首页
    back() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.navbar {
  position: relative;
  z-index: 11;
}
.titles {
  display: flex;
  font-size: 13px;
  padding: 0 25px;
}
.item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  margin-top: 7px;
}
</style>
