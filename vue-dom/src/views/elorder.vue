<template>
  <div class="wrap">
    <div class="header">
      <input type="text" placeholder="制定内容搜索">
      <span>取消</span>
    </div>
    <div class="main"></div>
    <div class="footer"></div>
  </div>
</template>
<script>
import request from "../util/request";
export default {
  created() {
    this.$store.dispatch("user/getuserInfo");
  }
};
</script>
<style lang="scss" scoped>
body,
html,
#app {
  width: 100%;
  height: 100%;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height:80px;
    background: green;
  }
  .main {
    width: 100%;
    flex: 1;
  }
  .footer {
    width: 100%;
    height: 80px;
  }
}
</style>


