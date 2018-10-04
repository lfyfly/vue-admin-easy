<template>
  <div class="header-side-layout" :class="[skin, {'full-mode': is_full_mode}]">
    <div class="header-container">
      <div class="header-left">
      </div>
      <div class="header-right">
        <header-options/>
        <header-user-info/>
      </div>
    </div>
    <div class="side-container">
      <header-logo/>
      <el-scrollbar class="side-nav-container">
        <side-nav/>
      </el-scrollbar>

    </div>
    <el-scrollbar class="page-container">
      <div class="page-container-inner">
        <slot>page-container</slot>
      </div>
    </el-scrollbar>
    <div class="full-mode-btn" :title="(is_full_mode?'退出':'进入')+'全覆盖模式'" @click="toggle_full_mode">
      <i class="full-mode-icon el-icon-caret-right"></i>
    </div>
  </div>
</template>

<script>
import header_logo from './_components/header-logo'
import header_options from './_components/header-options'
import header_user_info from './_components/header-user-info'
import side_nav from './_components/side-nav'

export default {
  name: 'header-side-layout',
  components: {
    'header-logo': header_logo,
    'header-options': header_options,
    'header-user-info': header_user_info,
    'side-nav': side_nav
  },
  data () {
    return {
      msg: 'this is from header-side-layout.vue',
      skins: [],
      is_full_mode: false,
      skin: ''
    }
  },
  methods: {
    toggle_full_mode () {
      this.is_full_mode = !this.is_full_mode
    }
  }
}
</script>
<style lang='scss'>
@import "./_skins/default.scss";
.page-container .el-scrollbar__wrap,
.side-nav-container .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>

<style lang='scss' scoped>
@import "./config.scss";
.header-side-layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  & > .header-container {
    position: absolute;
    z-index: 1;
    top: 0;
    left: $left-side-width;
    right: 0;
    height: $header-height;
    & > .header-left,
    & > .header-right {
      height: $header-height;
      & > * {
        display: inline-block;
        vertical-align: middle;
      }
    }
    & > .header-left {
      float: left;
    }
    & > .header-right {
      float: right;
    }
  }
  & > .side-container {
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: hidden;
    width: $left-side-width;
    .side-nav-container {
      height: calc(100vh - #{$header-logo-height});
    }
  }
  &.full-mode > .side-container:hover + .page-container {
    left: $left-side-width;
  }

  & > .page-container {
    position: absolute;
    left: $left-side-width;
    top: $header-height;
    right: 8px;
    bottom: 4px;
    transition: all 0.3s;
    border-radius: 4px;
    .page-container-inner {
      padding: 10px 10px 0 10px;
    }
  }
  &.full-mode > .page-container {
    top: 0;
    bottom: 0;
    left: 6px;
    right: 0;
    z-index: 9;
    border-radius: 0;
  }
  & > .full-mode-btn {
    width: 20px;
    height: 30px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
    cursor: pointer;
    .full-mode-icon {
      transform: rotateZ(-135deg);
      color: $layout-font-color;
      font-size: 18px;
      position: relative;
      left: -4px;
      top: -4px;
      opacity: 0.5;
    }
    &:hover {
      .full-mode-icon {
        opacity: 1;
      }
    }
  }
}
</style>
