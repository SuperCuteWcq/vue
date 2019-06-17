<template>
  <div class="nav">
    <div class="all">
      <span :class="{active:item.id==index}" v-for="item in data"
       :key="item.id"
       @click="handleTable(item.id,item.type)">{{item.title}}</span>
    </div>
    <p class="icon iconfont">&#xe613;</p>
    <p class="icon iconfont" @click="$router.push({
      path:`/order`
    })">&#xe617;</p>
  </div>
</template>
<script>
export default {
  data(){
    return {
      index:0,
      data:[
        {
          title:"加班",
          id:0,
          type:'overtime'
        },
        {
          title:"休假",
          id:1,
          type:'vacation'
        }
      ]
    }
  },
  methods:{
    handleTable(index,type){
      this.index=index

      this.$emit('handleTable',index,type)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #cccccc;
  display: flex;
  .all {
    width: 300px;
    height: 60px;
    margin-left: 200px;
    margin-top: 20px;
    display: flex;
    span {
      text-align: center;
      line-height: 60px;
      border: 1px solid #ccc;
      &.active{
        background: #07501cd4;
        color: white;
      }
    }
    span:nth-child(1) {
      width: 100%;
      height: 100%;
      border-bottom-left-radius: 30px;
      border-top-left-radius: 30px;
      flex: 1;
    }
    span:nth-child(2) {
      width: 100%;
      height: 100%;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      flex: 1;
    }
  }
  p {
    margin: 10px;
    margin-left: 40px;
    text-align: center;
    line-height: 80px;
    font-size: 35px;
    text-align: center;
  }
}
</style>

