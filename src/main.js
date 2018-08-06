// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Vuex from 'vuex'

import { routes } from './router/router-config'

Vue.use(Router)
Vue.use(Vuex)
const router = new Router({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
