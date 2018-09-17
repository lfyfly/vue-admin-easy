<template>
  <div class="toggle-btn" :class="{collapse: navCollapse}" @click="$store.commit('toggleNavCollapse')">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'toggle-btn',
  data () {
    return {
      msg: 'this is from toggle-btn.vue'
    }
  },
  computed: {
    ...mapState(['navCollapse'])
  }
}
</script>

<style lang='scss' scoped>
.toggle-btn {
  cursor: pointer;
  margin: 0 10px;
  $gap: 3px;
  $color: #c3c3c3;
  width: 18px;
  color: $header-color;
  background: $header-color;
  background-clip: content-box;
  height: $gap;
  padding: $gap 0;
  border-top: $gap solid;
  border-bottom: $gap solid;
  transition: height 0.3s, padding 0.3s, border-width 0.3s;
  &.collapse {
    padding: $gap - 1px 0;
  }
}
</style>
