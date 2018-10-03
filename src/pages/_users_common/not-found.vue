<template>
  <div class="not-found-page">
    <h1>404</h1>
    <h3>{{msg}}</h3>
    <router-link to="/home">to home page</router-link>

  </div>
</template>

<script>
export default {
  name: 'not-found-page',
  data () {
    return {
      msg: 'this is from not-found-page.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.not-found-page{

}
</style>
