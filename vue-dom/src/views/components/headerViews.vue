<template>
  <div class="top">
    <span class="icon iconfont" v-if="back" @click="$router.back()">&#xe61a;</span>
    <span class="text">{{title?title:$route.meta.title}}</span>
    <span class="icon iconfont">&#xe612;</span>
    <span class="icon iconfont">&#xe6ae;</span>
  </div>
</template>
<script>
export default {
    props:{
      title:{
        default:"",
        type:String
      },
      back:{
         default:true,
         type:Boolean
      }
    }
}
</script>

<style lang="scss" scoped>
.top {
  line-height: 60px;
  display: flex;
  width: 100%;
  height: 70px;
  .text {
    font-size: 30px;
  }
  span {
    flex: 1;
    font-size: 50px;
    margin: auto 0;
  }
  span:nth-child(2) {
    flex: 2;
  }
  span:nth-child(1) {
    flex: 2;
    text-align: left;
    margin-left: 30px;
  }
}
</style>

