<template>
  <div class="header-logo">
    <div class="logo-container short-logo">
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
  padding: 10px;
  & > .logo-container {
    height: 100%;
    background:  no-repeat center/contain;
    &.short-logo {
      background-image: url(~@/assets/img/logo.png);
    }
    &.long-logo {
      background-image: url(~@/assets/img/logo.png);
    }
  }
}
</style>
