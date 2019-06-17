<template>
  <div class="footer" v-show="show">
    <div class="mark" @click.self="$emit('close',show)">
      <div class="top">
        <span @click="$router.push({
          path:`/commit/overtime`
        })">加班</span>
         <span @click="$router.push({
          path:`/commit/vacation`
        })">休假</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show:Boolean,
    type:String
  }
};
</script>

<style lang="scss" scoped>
.footer {
  z-index: 1;
  width: 100%;
  height: 200px;
  background: white;

  .mark {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    .top {
      width: 100%;
      height: 150px;
      background: white;
      z-index: 1;
      position: fixed;
      bottom: 0px;
      left: 0;
      span {
        width: 100px;
        height: 100px;
        float: left;
        border-radius: 50%;
        margin: 50px 130px;
        background: red;
        display: block;
        text-align: center;
        line-height: 100px;
      }
    }
  }
}
</style>

