<template>
  <div class="header-options">
    <fullscreen-btn/>
  </div>
</template>

<script>

import fullscreen_btn from './header-options/fullscreen-btn'
export default {
  name: 'header-options',
  components: {
    'fullscreen-btn': fullscreen_btn
  },
  data () {
    return {
      msg: 'this is from header-options.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../config.scss";
.header-options{
  line-height: $header-height;
}
</style>
