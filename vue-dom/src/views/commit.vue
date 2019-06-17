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
              <span>{{userinfo.nickname}}</span>
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
            <span>加班日期</span>
            <span>
              <el-date-picker v-model="value1"/>
            </span>
          </li>
          <li>
            <span>加班类型</span>
            <span>
              <select v-model="usertype">
                  <option value="-1">默认</option>
                  <option v-for="(val,i) in this[type]"
                    :key="i"
                    :value="val.id"
                  >{{val.title}}</option>
              </select>
            </span>
          </li>
          <li>
            <span>加班起始时间</span>
            <span>
              <el-time-picker v-model="startTime"  />
            </span>
          </li>
          <li>
            <span>加班截止时间</span>
            <span>
              <el-time-picker v-model="endTime" @change="endTimeSelect"/>
            </span>
          </li>
          <li>
            <span>共计实数</span>
            <span>{{num}}</span>
          </li>
        </ul>
      </div>
      <div class="botton_main">
        <p>加班事由</p>
        <p><textarea v-model="describe"></textarea></p>
      </div>
      <div class="file">
        <input type="file" @change.self="submitFile">
        <ul>
          <li v-for="(item,i) in images" :key="i">
            <span @click="images.splice(i,1)">X</span>
            <img :src="'http://localhost:3000'+item" alt>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <span>取消</span>
      <span @click="submitButton">提交</span>
    </div>
    <!-- <alertMessage text="报错信息"/> -->
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import request from "../util/request";
import headerViews from "../views/components/headerViews";
import { showType, startTime } from "../util/computeTime";
import api from "../api/index";
export default {

  props: {
    type: String,
    id: String
  },
  data() {
    return {
      list: [],
      guide: {
        type: ["png", "gif", "svg", "jpg", "jpeg"],
        size: 3
      },
      images: [],
      value1: "",
      value2: "",
      startTime:"",
      endTime:"",
      overtime:[
        {
          id:1,
          title:'双休日'
        },
        {
          id:2,
          title:'节假日'
        },
        {
          id:3,
          title:'工作日'
        }
      ],
      vacation:[
        {
          id:1,
          title:'年假'
        },
        {
          id:2,
          title:'调休'
        }
      ],
      num:0,
      describe:"",
      usertype:-1,
      error:""
    };
  },
  components: {
    headerViews,
  },
  computed: {
    // userinfo(){
    //   return this.$store.state.userinfo
    // }
    ...mapState("user", ["userinfo"])
  },
  created() {
    // this.$store.dispatch('user/getuserInfo')
    this.getuserInfo();
  },
  methods: {
    ...mapActions("user", ["getuserInfo"]),
    submitFile(e) {
      let userFiles = e.target.files[0];
      let { type, size } = userFiles;
      let filetype = type.match(/\/(\w+)$/i)[1];
      let error=""
      if (!this.guide.type.includes(filetype)) {
        error = `请上传${this.guide.type.join()}类型的文件`;
      }
      if (this.guide.size * 1024 * 1024 < size) {
        error = `请上传小于${this.guide.size}MB大小的文件`;
      }
      if (error) {
        this.$alert(error);
        return;
      }
      console.log(userFiles)
      const fromdata = new FormData();
      fromdata.append("file", userFiles);
      api.submitFile(fromdata).then(res => {
        this.images.push(res.url);
      });
    },
    endTimeSelect(){
      let startTime=new Date(this.startTime)*1;
      let endTime=new Date(this.endTime)*1;
      let num=endTime-startTime
      if(endTime-startTime<0){
        this.$alert('时间选择错误');
        return
      }
      this.num=num

    },
    submitButton(){
      let options={
        annex:this.images,
        describe:this.describe,
        endTime:this.endTime,
        startTime:this.startTime,
        type:this.usertype
      }
      api['submit'+this.type](options).then(res=>{
        let {msg}=res;
        if(msg==='提交成功'){
          this.$router.back()
        }else{
          this.$alert(msg)
        }
      })
    }
  }
};
</script>

<style lang="scss">
body,
html,
#app {
  width: 100%;
  height: 100%;
}
.build {
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
    overflow: auto;
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
      ul {
        width: 100%;
        height: 100%;
        li {
          width: 100%;
          height: 80px;
          line-height: 80px;
          display: flex;
          span {
            flex: 1;
            font-size: 30px;
          }
          span:nth-child(1) {
            text-align: left;
            margin-left: 35px;
            color: #34303085;
          }
          span:nth-child(2) {
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
      bottom: 340px;
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
      textarea {
        width: 100%;
        height: 140px;
        font-size: 30px;
      }
    }
    .file {
      width: 100%;
      height: 240px;
      position: absolute;
      bottom: 85px;
      left: 0;
      ul {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 200px;
          height: 200px;
          background: #cccccc;
          position: relative;
          span {
            position: absolute;
            top: 0;
            right: 0;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #cccccc;
            text-align: center;
            font-size: 20px;
            line-height: 30px;
            margin-top: 10px;
          }
          img {
            width: 100%;
            height: 100%;
            background: red;
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 80px;
    display: flex;
    span {
      flex: 1;
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 80px;
      font-size: 36px;
    }
    span:nth-child(1) {
      color: green;
    }
    span:nth-child(2) {
      background: green;
      color: white;
    }
  }
}
</style>





