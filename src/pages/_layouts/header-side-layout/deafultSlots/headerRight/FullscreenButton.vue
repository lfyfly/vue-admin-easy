<template>
  <div class="fullscreen-button" v-if="!isIE&&screenfullEnabled">
    <div class="fullscreen-icon" @click="toggleFullscreen">
      <span class="fa fa-arrows-alt" v-if="!isFullScreen"></span>
      <span class="fa fa-compress" v-else></span>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'fullscreen-button',
  data () {
    return {
      msg: 'this is from fullscreen-button.vue',
      isIE: !!window.ActiveXObject || 'ActiveXObject' in window,
      screenfullEnabled: screenfull.enabled,
      isFullScreen: false
    }
  },
  methods: {
    toggleFullscreen () {
      if (screenfull.toggle) {
        screenfull.toggle()
        this.isFullScreen = !this.isFullScreen
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.fullscreen-button {
  .fullscreen-icon {
    width: 30px;
    line-height: 30px;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    color: #606266;
  }
}
</style>
