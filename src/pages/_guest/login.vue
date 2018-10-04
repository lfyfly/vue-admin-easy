<template>
  <div class="login-page">
    <h3>{{msg}}</h3>
    <a @click="login">登录</a>
  </div>
</template>

<script>
import UTIL from '@/UTIL'
export default {
  name: 'login-page',
  data () {
    return {
      msg: 'this is from login-page.vue'
    }
  },
  methods: {
    login () {
      UTIL.token.set('123456')
      this.$router.push('/')
    }
  }
}
</script>

<style lang='scss' scoped>
.login-page {
}
</style>
