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
  margin: 6px 0;
  height: $header-logo-height - 6px * 2;
  width: $left-side-width;
  box-sizing: border-box;
  & > .logo-container {
    height: 100%;
    background: url(~@/assets/img/logo.png) no-repeat center/contain;
  }
}
</style>
