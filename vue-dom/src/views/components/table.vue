<template>
  <div class="botton">
    <dl v-for="item in menudata" :key="item.index" @click="handleClick(item.index)">
      <dd :class="{active:item.index==index}"><i :class="'iconfont  '+item.icon"></i></dd>
      <dt :class="{font:item.index==index}">{{item.title}}</dt>
    </dl>
  </div>
</template>
<script>
export default {
  data(){
    return {
      index:0,
      menudata:[
        {
          title:"待处理",
          icon:"icon-daichuli",
          index:0
        },
        {
          title:"已发起",
          icon:"icon-faqi",
          index:1
        },
        {
          title:"已处理",
          icon:"icon-yichuli-xianxing",
          index:2
        }
      ]
    }
  },
  methods: {
    handleClick(index){
      this.index=index
      console.log(index,"table")
      this.$emit('handleClick',index)
    }
  }
}
</script>

<style lang="scss" scoped>
.botton {
  width: 100%;
  height: 150px;
  display: flex;
  text-align: center;
  border-bottom: 1px solid #cccccc;
  dl {
    flex: 1;
    width: 100%;
    dd {
      width: 85px;
      height: 85px;
      background: #80808033;
      border-radius: 50%;
      margin: 10px auto;
      font-size: 45px;
      text-align: center;
      line-height: 85px;
      color: white;
       &.active{
        background: #07501cd4;
      }
      i{
         z-index: 2;
          width: 100%;
          height: 100%;
          display: block;
         text-align: center;
         line-height: 85px;
         font-size: 50px;
      }
    }
    dt {
      width: 100%;
      text-align: center;
      &.font{
        color: #07501cd4;
      }
    }
  }
}

</style>

