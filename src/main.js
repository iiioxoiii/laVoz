import Vue from 'vue'
import App from './App.vue'
import JQuery from 'jquery'
global.$ = JQuery

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
