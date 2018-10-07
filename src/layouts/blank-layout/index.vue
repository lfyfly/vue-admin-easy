<template>
  <div class="blank-layout" :class="skin||'skin-default'">
    <slot/>
  </div>
</template>

<script>
import UTIL from '@/UTIL'

export default {
  name: 'blank-layout',
  data () {
    return {
      msg: 'this is from blank-layout.vue',
      skin: UTIL.storage.skin.get()
    }
  },
  created () {
    console.log('BlankLayout')
  }
}
</script>
<style lang="scss">
@import './_skins/index.scss';
</style>

<style lang='scss' scoped>
.blank-layout {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
</style>
