import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '../views/LoginPage'
import MajorPage from '../views/MajorPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: LoginPage
    },
    {
      path: '/select_major',
      name: 'Major',
      component: MajorPage
    }
  ],
  mode: 'history'
})
