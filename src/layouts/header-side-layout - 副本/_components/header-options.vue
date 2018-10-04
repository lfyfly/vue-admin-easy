<template>
  <div class="header-options">
    <h3>options</h3>
  </div>
</template>

<script>
export default {
  name: 'header-options',
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
