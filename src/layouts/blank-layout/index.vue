<template>
  <div class="blank-layout">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'blank-layout',
  data () {
    return {
      msg: 'this is from blank-layout.vue'
    }
  },
  created () {
    console.log('BlankLayout')
  }
}
</script>

<style lang='scss' scoped>
.blank-layout {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
</style>
