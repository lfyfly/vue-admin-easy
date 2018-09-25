<template>
  <div class="users">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      msg: 'this is from users.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.users{

}
</style>
