<template>
  <div class="users-table-page">
    <h3>{{msg}}</h3>
    <router-link to="/home">to home page</router-link>
    <p>{{tableData}}</p>
  </div>
</template>

<script>
import API from '@/API'
export default {
  name: 'users-table-page',
  data () {
    return {
      msg: 'this is from users-table-page.vue',
      tableData: []
    }
  },
  methods: {
    getTableData () {
      API.users.read().then(res => {
        this.tableData = res.data
      })
    }
  },
  created () {
    this.getTableData()
  }
}
</script>

<style lang='scss' scoped>
.users-table-page{

}
</style>
