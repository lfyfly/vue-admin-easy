<template>
  <div class="toggle-skin-btn">
    <i class="el-icon-view" title="切换主题"></i>
  </div>
</template>

<script>
export default {
  name: 'toggle-skin-btn',
  data () {
    return {
      msg: 'this is from toggle-skin-btn.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.toggle-skin-btn{
  cursor: pointer;
  margin-right: 10px;
}
</style>
