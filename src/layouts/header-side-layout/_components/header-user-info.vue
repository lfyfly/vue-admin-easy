<template>
  <div class="header-user-info">
    <div class="username">{{my_info.username}}</div>
    <div class="user-drop">
      <a class="user-drop-item" @click="logout">登出</a>
      <router-link class="user-drop-item" to="/personal">个人信息</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UTIL from '@/UTIL'

export default {
  name: 'header-user-info',
  data () {
    return {
      msg: 'this is from header-user-info.vue'
    }
  },
  computed: {
    ...mapState(['my_info'])
  },
  methods: {
    logout () {
      UTIL.token.remove()
      location.reload()
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../config.scss";
.header-user-info {
  position: relative;
  min-width: 80px;
  max-width: 100px;
  margin-right: 10px;
  text-align: center;
  cursor: pointer;
  .username {
    width: 100%;
    line-height: $header-height;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover{
      text-decoration: underline;
    }
  }
  &:hover .user-drop {
    display: block;
  }
  .user-drop {
    position: absolute;
    width: 100%;
    top: 100%;
    right: 0;
    display: none;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 6px;
    padding: 4px;

    .user-drop-item {
      color: #fff;
      display: block;
      text-align: center;
      line-height: 1.6;
      font-size: 13px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 6px;
      }
    }
  }
}
</style>
