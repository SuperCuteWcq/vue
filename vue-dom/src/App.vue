<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import request from "./util/request"
export default {
  created(){
     request.get('/api/user/info')
  }
}
</script>
<style lang="scss">

</style>


