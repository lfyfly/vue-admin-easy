<template>
  <div class="side-nav">
    <h3>{{msg}}</h3>
    <p>{{nav_config}}</p>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'side-nav',
  data () {
    return {
      msg: 'this is from side-nav.vue'
    }
  },
  computed: {
    ...mapState(['nav_config'])
  }
}
</script>

<style lang='scss' scoped>
@import "../config.scss";
.side-nav {
  min-height: calc(100vh - #{$header-height});
}
</style>
