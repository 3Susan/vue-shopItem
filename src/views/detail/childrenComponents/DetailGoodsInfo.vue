<template>
  <div class="goods-info" v-if="Object.keys(params).length !== 0">  
    <table class="size"  v-for="(table,index) in params.sizes" :key="index">
      <tr class="tr" v-for="(tr,indey) in table" :key="indey">
        <td class="td" v-for="(td,indez) in tr" :key="indez">
          {{td}}
        </td>
      </tr>
    </table>
    <table class="infos" >
      <tr class="tr" v-for="(info,index) in params.infos" :key="index">
        <td class="title">{{info.key}}</td>
        <td class="value">{{info.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props:{
    params:{
      type:Object,
      default(){
        return {}
      }
    }
  },

  components: {

 },
}

</script>
<style lang="less" scoped>
  .size{
    margin-top: 15px;
    border-top: 5px solid #eee;
    width: 100%;
    text-align: center;
    .tr{
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
      .td{
        padding: 13px;
        font-size: 14px;
      }
    }
  }

  .infos{
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 5px solid #eee;
    .tr{
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
    }
    .title{
      text-align: center;
      padding-left: 35px;
    }
    .value{
     position: relative;
     left: 50px;
     color:var(--color-high-text)
    }
    td{
      padding: 13px;
      font-size: 14px;
    }
  }


</style>