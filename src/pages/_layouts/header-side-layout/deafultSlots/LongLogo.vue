<template>
  <div class="long-logo"></div>
</template>
<script>

export default {
  name: 'long-logo',
  data () {
    return {
      msg: 'this is from long-logo.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.long-logo {
  width: $header-height * 0.5;
  height: $header-height * 0.5;
  background: url($long-logo-url) no-repeat center/contain;
}
</style>
