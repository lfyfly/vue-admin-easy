<template>
  <div class="header-side-layout">
    <div class="header">header</div>
    <div class="header">nav</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'header-side-layout',
  data () {
    return {
      msg: 'this is from header-side-layout.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.header-side-layout{

}
</style>
