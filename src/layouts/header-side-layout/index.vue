<template>
  <div class="header-side-layout">
    <div class="header-container">
      <div class="header-left">
        <header-logo/>
        <header-toggle-btn/>
      </div>
      <div class="header-right">
        <header-options/>
        <header-user-info/>
      </div>
    </div>
    <div class="side-nav-container">
      <side-nav/>
    </div>
    <div class="page-container">
      <slot/>
    </div>
  </div>
</template>

<script>
import header_logo from './_components/header-logo'
import header_options from './_components/header-options'
import header_toggle_btn from './_components/header-toggle-btn'
import header_user_info from './_components/header-user-info'
import side_nav from './_components/side-nav'

export default {
  name: 'header-side-layout',
  components: {
    'header-logo': header_logo,
    'header-options': header_options,
    'header-toggle-btn': header_toggle_btn,
    'header-user-info': header_user_info,
    'side-nav': side_nav
  },
  data () {
    return {
      msg: 'this is from header-side-layout.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
@import "./config.scss";
.header-side-layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  &>.header-container {
    position: absolute;
    top: 0;
    width: 100vw;
    height: $header-height;
    background: #ccc;

    & > .header-left {
      float: left;
      height: $header-height;
      & > * {
        display: inline-block;
      }
    }
    & > .header-right {
      float: right;
      height: $header-height;
      & > * {
        display: inline-block;
      }
    }
  }
  &>.side-nav-container{
    position: absolute;
    top: $header-height;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    width: $left-side-width;
    background: #eee;
  }
  &>.page-container{
    position: absolute;
    top: $header-height;
    left: $left-side-width;
    bottom: 0;
    right: 0;
    overflow: auto;
    background: #f5f5f5;
  }
}
</style>
