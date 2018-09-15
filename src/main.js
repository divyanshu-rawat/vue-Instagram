import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import dragscroll from 'vue-dragscroll'
Vue.directive('dragscroll', dragscroll)

new Vue({
  render: h => h(App)
}).$mount('#app')
