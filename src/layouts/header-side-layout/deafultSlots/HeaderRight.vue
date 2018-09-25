<template>
  <div class="header-right">
   <fullscreen-button/>
   <me/>
  </div>
</template>

<script>
import me from './headerRight/Me'
import FullscreenButton from './headerRight/FullscreenButton'

export default {
  name: 'header-right',
  components: {
    me,
    FullscreenButton
  },
  data () {
    return {
      msg: 'this is from header-right.vue'
    }
  }
}
</script>
<style lang='scss' scoped>
.header-right {
  display: table;
  height: $header-height;
  margin-right: 20px;
  &>*{
    display: table-cell;
    vertical-align: middle;
    padding: 0 10px;
  }
}
</style>
