<template>
  <div class="users-table-page">
    <h3>{{msg}}</h3>
    <router-link to="/home">to home page</router-link>
  </div>
</template>

<script>
export default {
  name: 'users-table-page',
  data () {
    return {
      msg: 'this is from users-table-page.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.users-table-page{

}
</style>
