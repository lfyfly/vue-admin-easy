<template>
  <div class="header-user-info">
    <div class="username">{{my_info.username}}</div>
    <div class="user-drop">
      <a class="user-drop-item">登出</a>
      <router-link class="user-drop-item" to="/personal">个人信息</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'header-user-info',
  data () {
    return {
      msg: 'this is from header-user-info.vue'
    }
  },
  computed: {
    ...mapState(['my_info'])
  }
}
</script>

<style lang='scss' scoped>
@import "../config.scss";
.header-user-info {
  position: relative;
  width: 80px;
  margin-right: 20px;
  cursor: pointer;
  .username {
    line-height: $header-height;
  }
  &:hover .user-drop {
    display: block;
  }
  .user-drop {
    position: absolute;
    width: 100%;
    top: 100%;
    display: none;
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
