<template>
  <div class="login-page">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'login-page',
  data () {
    return {
      msg: 'this is from login-page.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.login-page{

}
</style>
