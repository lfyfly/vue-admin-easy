<template>
  <div class="home-page">
    <img alt="Vue logo" src="~@/assets/logo.png">
    <p>is_dev：{{is_dev}}</p>
    <p>is_mobile：{{is_mobile}}</p>
    <router-link to="/users">to users page</router-link>
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
