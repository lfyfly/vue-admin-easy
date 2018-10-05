<template>
  <div class="fullscreen-btn" v-if="!is_ie">
    <i class="el-icon-rank" @click="toggleFullscreen" :title="!is_full_screen?'全屏':'退出全屏'"></i>
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'fullscreen-btn',
  data () {
    return {
      msg: 'this is from fullscreen-btn.vue',
      is_ie: !!window.ActiveXObject || 'ActiveXObject' in window,
      screenfull_enabled: screenfull.enabled,
      is_full_screen: false
    }
  },
  methods: {
    toggleFullscreen () {
      if (screenfull.toggle) {
        screenfull.toggle()
        this.is_full_screen = !this.is_full_screen
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.fullscreen-btn {
  overflow: hidden;
  margin-right: 10px;
  .el-icon-rank {
    transform: rotateZ(45deg);
    cursor: pointer;
    font-weight: bold;
  }
}
</style>
