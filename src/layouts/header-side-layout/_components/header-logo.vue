<template>
  <div class="header-logo">
    <h3>{{msg}}</h3>
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
.header-logo{
}
</style>
