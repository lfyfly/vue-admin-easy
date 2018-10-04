<template>
  <div class="home-page">
    <img alt="Vue logo" src="~@/assets/img/logo.png">
    <p>is_dev：{{is_dev}}</p>
    <p>is_mobile：{{is_mobile}}</p>
    <div>
      <router-link to="/users/list">to users page</router-link>
    </div>
    <div>
      <router-link to="/roles">to roles page</router-link>
    </div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp p pp </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'home-page',
  computed: {
    ...mapState(['is_dev', 'is_mobile'])
  }
}
</script>
