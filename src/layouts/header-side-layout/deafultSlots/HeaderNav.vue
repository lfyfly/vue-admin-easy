<template>
  <div class="header-nav">
    <ul>
      <li :class="{isActive:sideNavAcitveIndex===i}" v-for="(navItem,i) in headerNav" @click="toggleSideNav(i)" :key="navItem.title">
        <router-link :to="navItem.path"><i :class="[navItem.icon, { fa: navItem.icon&&navItem.icon.indexOf('fa-')!==-1 } ]"></i> {{navItem.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'header-nav',
  data () {
    return {
      msg: 'this is from header-nav.vue'
    }
  },
  computed: {
    ...mapState(['headerNav', 'sideNavAcitveIndex'])
  },
  methods: {
    toggleSideNav (index) {
      this.$store.commit('toggleSideNav', index)
    }
  }
}
</script>
<style lang='scss' scoped>

.header-nav {
  ul {
    display: table;
    height: $header-height;
    li.isActive {
      i,a {
        color: $header-color-active;
      }
    }
    & > * {
      display: table-cell;
      vertical-align: middle;
      padding: 0 10px;
    }
  }
}
</style>
