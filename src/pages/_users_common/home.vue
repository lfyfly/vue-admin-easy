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
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
    <p>ppp ppp ppp ppp pppp ppp p p pp  p pp </p>
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
