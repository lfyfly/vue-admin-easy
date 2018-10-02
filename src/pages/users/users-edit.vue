<template>
  <div class="users-edit-page">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'users-edit-page',
  data () {
    return {
      msg: 'this is from users-edit-page.vue'
    }
  },
  props: {
    mode: {
      type: String,
      default: 'create' // 'create' | 'update'
    }
  }
}
</script>

<style lang='scss' scoped>
.users-edit-page{

}
</style>
