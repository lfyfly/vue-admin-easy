<template>
  <div class="header-user-info">
    <div class="username">{{my_info.username}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'header-user-info',
  data () {
    return {
      msg: 'this is from header-user-info.vue'
    }
  },
  computed: {
    ...mapState(['my_info'])
  }
}
</script>

<style lang='scss' scoped>
@import "../config.scss";
.header-user-info {
  margin: 0 20px;
  .username {
    line-height: $header-height;
  }
}
</style>
