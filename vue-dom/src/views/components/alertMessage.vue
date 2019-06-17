<template>
  <div class="alert" v-show="open">
    {{text}}
  </div>
</template>
<script>
export default {
  props:{
    text:String
  },
  data(){
    return{
      open:false,
      timer:null
    }
  },
  mounted(){
    this.timer=setTimeout(() => {
        this.open=true
    },2000);
  },
  destroyed(){
    clearTimeout(this.timer)
  }


}
</script>
<style lang="scss" scoped>
  .alert{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color:#fff;
    padding: 28px;
    font-size: 20px;
    z-index: 10000;
    background: #cccccc;
  }
</style>

