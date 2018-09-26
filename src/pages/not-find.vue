<template>
  <div class="not-find">
    <h1>404</h1>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'not-find',
  data () {
    return {
      msg: 'this is from not-find.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.not-find{

}
</style>
