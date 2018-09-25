<template>
  <div class="short-logo" ></div>
</template>
<script>

export default {
  name: 'short-logo',
  data () {
    return {
      msg: 'this is from short-logo.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.short-logo {
  width: $header-height * 0.5;
  height: $header-height * 0.5;
  background: url($short-logo-url) no-repeat center/contain;
}
</style>
