import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '../views/LoginPage'
import IndexPage from '../views/IndexPage'
import MajorSelectionPage from '../views/MajorSelectionPage'
import ProfilePage from '../views/ProfilePage'
import ProfilePage2 from '../views/ProfilePage2'
import GeneralQuestionPage from '../views/GeneralQuestionPage'
import MajorQuestionPage from '../views/MajorQuestionPage'
import SummaryPage from '../views/SummaryPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/authen'
    },
    {
      path: '/authen',
      name: 'authen',
      component: LoginPage
    },
    {
      path: '/steps',
      named: 'index',
      component: IndexPage,
      children: [
        {
          path: '',
          name: 'authen',
          redirect: '/authen'
        },
        {
          path: 'selection',
          named: 'majorSelection',
          component: MajorSelectionPage
        },
        {
          path: 'profile',
          named: 'profile',
          component: ProfilePage
        },
        {
          path: 'profile2',
          named: 'profile2',
          component: ProfilePage2
        },
        {
          path: 'general',
          named: 'generalQuestion',
          component: GeneralQuestionPage
        },
        {
          path: 'major',
          named: 'majorQuestion',
          component: MajorQuestionPage
        },
        {
          path: 'summary',
          named: 'summary',
          component: SummaryPage
          // beforeEnter (to, from, next) {
          //   if (store.state.completed) {
          //     next()
          //   } else {
          //     next(false)
          //   }
          // }
        }
      ]
    }
  ],
  mode: 'history'
})
