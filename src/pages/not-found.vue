<template>
  <div class="not-found">
    <h1>404</h1>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'not-found',
  data () {
    return {
      msg: 'this is from not-found.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.not-found{

}
</style>
