<template>
  <div class="header-user-info">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'header-user-info',
  data () {
    return {
      msg: 'this is from header-user-info.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.header-user-info{

}
</style>
