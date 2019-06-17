<template>
  <div class="build">
    <div class="header">
      <headerViews :title="type==='overtime'?'办公室加班申请表':'办公室休假申请表'"/>
      <div class="botton_header">
        <dl>
          <dd>
            <i class="iconfont icon-wode"></i>
          </dd>
          <dt>
            <p>
              <span>申请人姓名</span>
              <span>{{this.list.nickname}}</span>
            </p>
            <p>
              <span>直接主管</span>
              <span>王双全</span>
            </p>
          </dt>
        </dl>
      </div>
    </div>
    <div class="main">
      <div class="top_main">
        <p>申请信息</p>
        <ul>
          <li>
            <span>加班日期</span><span>{{new Date(this.list.startTime).toLocaleDateString()}}</span>
          </li>
          <li>
            <span>加班类型</span><span>{{showType(this.list.type,this.list.list_type)}}</span>
          </li>
          <li>
            <span>加班起始时间</span><span>{{startTime(this.list.startTime)}}</span>
          </li>
          <li>
            <span>加班截止时间</span><span>{{new Date(this.list.endTime).toLocaleDateString()}}</span>
          </li>
          <li>
            <span>共计实数</span><span>{{reducerTime(this.list.startTime,this.list.endTime)}}</span>
          </li>
        </ul>
      </div>
      <div class="botton_main">
        <p>加班事由</p>
        <p>{{this.list.describes}}</p>
      </div>
      <div class="file">
        <p><img :src="'http://localhost:3000'" alt=""></p>
      </div>
    </div>
    <div class="footer">
      <span>取消</span><span>提交</span>
    </div>
  </div>
</template>
<script>
import request from '../util/request'
import headerViews from '../views/components/headerViews'
import {showType,startTime} from "../util/computeTime"
import api from '../api/index'
export default {
  data(){
    return {
      list:[]
    }
  },
  components: {
    headerViews
  },
  created(){
    api[`${this.type}Detail`]({
      applicationNumber:this.id
    }).then(res=>{
       this.list=res.data
    })
  },
  methods:{
    reducerTime(start,end){
          let start_num=new Date(new Date(start).toGMTString())*1
          let end_num=new Date(new Date(end).toGMTString())*1
          let num=(end_num-start_num)/1000;
          let day=(num/60/60/24).toFixed(1)
          return day
    },
    showType(type,listType){
      return showType(type,listType)
    },
    startTime(start){
      return startTime(start)
    }

  },
  props:{
    type:String,
    id:String
  }
}
</script>

<style lang="scss">
  body,html,#app{
    width: 100%;
    height: 100%;
  }
  .build{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
.header {
  width: 100%;
  height: 360px;
  background: green;
  .top_header {
    width: 100%;
    height: 100px;
    display: flex;
    span {
      flex: 1;
      line-height: 100px;
      font-size: 55px;
      color: white;
      font-weight: 600;
    }
    span:nth-child(1) {
      margin-left: 20px;
    }
    span:nth-child(2) {
      flex: 2;
      text-align: center;
      font-size: 32px;
    }
  }
  .botton_header {
    width: 100%;
    height: 160px;
    dl {
      width: 100%;
      height: 100%;
      display: flex;
      dd {
        margin: 23px 30px;
        width: 100px;
        height: 100px;
        background: #cccccc;
        border-radius: 50%;
        border: 1px solid #cccccc;
        text-align: center;
        line-height: 100px;
        i {
          font-size: 85px;
        }
      }
      dt {
        margin-left: 50px;
        p {
          margin-top: 30px;
          span {
            margin: 0 20px;
          }
        }
      }
    }
  }
}
.main {
  width: 100%;
  flex: 1;
  .top_main {
    width: 80%;
    height: 500px;
    background: #e6e3e3;
    position: absolute;
    top: 250px;
    left: 75px;
    border: 1px solid #cccccc;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    p {
      width: 100%;
      height: 40px;
      margin: 20px 25px;
      font-size: 30px;
    }
    ul{
      width: 100%;
      height: 100%;
      li{
        width: 100%;
        height: 80px;
        line-height: 80px;
        display: flex;
        span{
          flex: 1;
          font-size: 30px;

        }
        span:nth-child(1){
          text-align: left;
          margin-left: 35px;
          color:#34303085;
        }
        span:nth-child(2){
          text-align: right;
          margin-right: 35px;
        }
      }
    }
  }
  .botton_main {
    position: relative;
    width: 80%;
    height: 200px;
    background: #e6e3e3;
    position: absolute;
    bottom:340px;
    left: 75px;
    border: 1px solid #cccccc;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    p {
      width: 100%;
      height: 40px;
      margin: 20px 25px;
      font-size: 30px;
    }
    textarea{
      width: 100%;
      height: 140px;
      font-size: 30px;
    }
  }
  .file{
    width: 100%;
    height: 30px;
    position: absolute;
    bottom:285px;
    left: 0;
  }
}
.footer {
  width: 100%;
  height: 80px;
  display: flex;
  span{
    flex:1;
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 80px;
    font-size:36px;

  }
  span:nth-child(1){
    color:green
  }
   span:nth-child(2){
    background:green;
    color: white;
  }
}
  }
</style>





