<template>
  <div class="comment" v-if="false"> 
    <div class="title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-item">
      <div class="user">
        <img :src="commentInfo.user.avatar">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info">
        <span class="content">{{commentInfo.content}}</span>
        <div>
          <div class="user-info">
            <span>{{commentInfo.created | showDate}}</span>
            <span class="style">{{commentInfo.style}}</span>
          </div>
          <img :src="commentInfo.images[0]" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utilis.js'
export default {
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      isshow:{}
    }
  },
  // 过滤时间戳
  filters:{
    showDate(value){
      // 1.将时间戳转成date对象
      const date = new Date(value*1000)
      // 2. 将date进行格式化
      return formatDate(date,'yyyy-MM-dd hh:mm:ss')
    }
  },
  updated(){
    this.isshow =this.commentInfo
  }
}


</script>
<style lang="less" scoped>
.comment{
  width:100%;

  .title{
    display: flex;
    width: 95%;
    margin: 0 auto;
    border-bottom: 2px solid #eee;
    font-size: 15px;
    justify-content: space-between;
    padding:10px;
  }
}
.comment-item{
  .user{
    display: flex;
    line-height: 40px;
    margin: 10px;
    img{
      width: 40px;
      height:40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
.info{
  width: 100%;
  .content{
    display: block;
    width: 95%;
    margin: 0 auto;
    line-height: 20px;
    font-size: 15px;
  }
  .user-info{
    width: 95%;
    margin: 5px auto;
    .style{
      margin-left: 15px;
    }
  }
  img{
    height: 100px;
    width: 100px;
    margin: 5px 0 0 12px;
  }
}
</style>