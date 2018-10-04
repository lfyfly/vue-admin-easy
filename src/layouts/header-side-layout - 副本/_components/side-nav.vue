<template>
  <div class="side-nav">
    <el-menu class="side-nav-menu" default-active="/users/list" :router="true">
      <template v-for="(group,i) in nav_config">
        <el-menu-item class="nav-text" v-if="group.routes.length ===1" :index="group.routes[0].path" :key="group.title">
          <i class="side-nav-icon" :class="group.icon"></i>
          <span>{{group.routes[0].meta.title}}</span>
        </el-menu-item>
        <el-submenu v-else :index="i+''" :key="group.title">
          <template slot="title">
            <i class="side-nav-icon" :class="group.icon"></i>
            <span class="nav-text">{{group.title}}</span>
          </template>
          <template v-if="group.routes">
            <el-menu-item class="nav-text nav-son-item" v-for="route in group.routes" :index="route.path" :key="route.meta.title">
              <i class="side-nav-icon" :class="route.meta.icon"></i>
              <span>{{route.meta.title}}</span>
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'side-nav',
  data () {
    return {
      msg: 'this is from side-nav.vue'
    }
  },
  computed: {
    ...mapState(['nav_config'])
  }
}
</script>
<style>
.side-nav-icon {
  margin-right: 2px;
}
</style>

<style lang='scss' scope >
@import "../config.scss";
.side-nav {
  min-height: calc(100vh - #{$header-height});
  .side-nav-menu{
    margin-top: 20px;
  }
}
</style>
