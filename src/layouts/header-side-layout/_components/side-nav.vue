<template>
  <div class="side-nav">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'side-nav',
  data () {
    return {
      msg: 'this is from side-nav.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.side-nav{

}
</style>
