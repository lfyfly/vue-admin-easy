<template>
  <div class="header-side-layout">
    <div class="my-header">
      <div class="header-left-container">
        <div class="logo-container" :class="{collapse: navCollapse}">
          <short-logo v-if="navCollapse" />
          <long-logo v-else />

        </div>
        <div class="toggle-btn-container">
          <toggle-btn/>
        </div>
        <div v-if="navConfig[0].sideNav" class="header-nav-container">
          <header-nav/>
        </div>
      </div>
      <div class="header-right-container">
        <header-right/>
      </div>
    </div>
    <el-scrollbar class="side-container">
      <side-nav/>
    </el-scrollbar>
    <el-scrollbar class="page-scroll-container" :class="{collapse:navCollapse}">
      <div class="page-container">
        <slot>page-container</slot>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import HeaderRight from './deafultSlots/HeaderRight.vue'
import HeaderNav from './deafultSlots/HeaderNav.vue'
import SideNav from './deafultSlots/SideNav.vue'
import LongLogo from './deafultSlots/LongLogo.vue'
import ShortLogo from './deafultSlots/ShortLogo.vue'
import ToggleBtn from './deafultSlots/ToggleBtn.vue'
import { mapState } from 'vuex'
export default {
  name: 'header-side-layout',
  components: {
    HeaderRight,
    HeaderNav,
    SideNav,
    LongLogo,
    ShortLogo,
    ToggleBtn
  },
  data () {
    return {
      msg: 'this is from header-side-layout.vue'
    }
  },
  computed: {
    ...mapState(['navCollapse', 'navConfig'])
  },
  created () {
    // console.log('HeaderSideLayout')
  }
}
</script>
<style lang='scss'>
.side-container,
.page-scroll-container {
  & > .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
.my-header {
  *,
  a {
    color: $header-color;
  }
}
</style>

<style lang='scss' scoped>
.header-side-layout {
  .logo-container {
    width: $side-width;
    transition: width 0.3s;
    text-align: center;
    white-space: nowrap;
    & > * {
      display: inline-block;
      vertical-align: middle;
    }
    &.collapse {
      width: 65px;
    }
  }
  .my-header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    background: $header-bg-color;
    border-bottom: 1px solid #e6e6e6;
    height: $header-height;
    box-sizing: border-box;

    .header-left-container {
      display: table;
      float: left;
      height: $header-height;
      & > * {
        vertical-align: middle;
        display: table-cell;
      }
    }
    .header-right-container {
      float: right;
      height: $header-height;
    }
  }
  .side-container {
    top: $header-height;
    bottom: 0;
    background: $side-background-color;
    position: fixed;
    border-right: solid 1px #e6e6e6;
    box-sizing: border-box;
    z-index: 1;
  }
  .page-scroll-container {
    padding-top: $header-height;
    padding-left: $side-width + 1px;
    transition: padding-left 0.3s ease-in-out;
    background: #fff;
    height: calc(100vh - #{$header-height});
    background: url($page-bg-image) no-repeat top left/cover fixed;
    &.collapse {
      padding-left: 65px;
    }
    & .page-container {
      min-height: calc(100vh - #{$header-height});
      background: #fff;
    }
  }
}
</style>
