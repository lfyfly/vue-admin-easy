import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/mock'
import layouts from '@/layouts'
Object.keys(layouts).map(layoutName => {
  Vue.component(layoutName, layouts[layoutName])
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
