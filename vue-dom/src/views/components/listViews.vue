<template>
 <div class="big">
 <li v-for="(item,i) in list" :key="i"
  @click="$router.push({
    path:`/detail/${item.list_type}/${item.applicationNumber}`
 })">
    <div class="one">
      <span>{{item.applicationNumber}}</span>
      <span>待审批</span>
    </div>
    <div class="two">
      <span>
        申请人：
        <span class="name">{{item.nickname}}</span>
      </span>
      <span>
        加班类型：
        <span class="name">{{showType(item.type,item.list_type)}}</span>
      </span>
    </div>
    <div class="three">
      <span>
        加班日期：
        <span class="name">{{new Date(item.endTime).toLocaleDateString()}}</span>
      </span>
      <span>
        加班实数：
        <span class="name">{{timeAll(item.startTime,item.endTime)}}</span>
      </span>
    </div>
  </li>
 </div>
</template>
<script>
import {showType} from '../../util/computeTime'
export default {
  props:{
    list:{
      type:Array
    }
  },
  methods:{
    showType(type,listType){
      return showType(type,listType)
    },

    timeAll(start,end){
      let start_num=new Date(new Date(start).toGMTString())*1
      let end_num=new Date(new Date(end).toGMTString())*1
      let num=(end_num-start_num)/1000;
      let day=(num/60/60/24).toFixed(1)
      return day
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  width: 100%;
  height: 250px;
  border-bottom: 1px solid #ccc;
  .one {
    display: flex;
    width: 100%;
    height: 80px;
    line-height: 80px;
    .yellow {
      width: 100px;
      height: 100px;
      background: yellow;
      border-radius: 50%;
    }
    span:nth-child(1) {
      flex: 1;
      text-align: left;
      margin-left: 30px;
    }
    span:nth-child(2) {
      flex: 2;
      text-align: right;
      margin-right: 53px;
    }
  }
  .two,
  .three,
  .one {
    width: 100%;
    display: flex;
    span {
      flex: 1;
      margin-left: 30px;
    }
    .name {
      font-weight: 700;
    }
  }
}
</style>

