<template>
  <div class="header-options">
    <h3>{{msg}}</h3>
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
.header-options{

}
</style>
