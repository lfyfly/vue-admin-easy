<template>
  <div class="unauthorized-page">
    <h1>401</h1>
    <h3>{{msg}}</h3>
    <router-link to="/home">to home page</router-link>
  </div>
</template>

<script>
export default {
  name: 'unauthorized-page',
  data () {
    return {
      msg: 'this is from unauthorized-page.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.unauthorized-page{

}
</style>
