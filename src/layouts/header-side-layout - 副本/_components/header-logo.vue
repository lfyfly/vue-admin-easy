<template>
  <div class="header-logo">
    <div class="logo-container">
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-logo',
  data () {
    return {
      msg: 'this is from header-logo.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../config.scss";

.header-logo {
  height: $header-height;
  width: $left-side-width;
  box-sizing: border-box;
  padding: $header-logo-top;
  & > .logo-container {
    height: 100%;
    background: url(~@/assets/img/logo.png) no-repeat center/contain;
  }
}
</style>
