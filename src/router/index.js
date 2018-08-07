import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '../views/LoginPage'
<<<<<<< HEAD
import MajorPage from '../views/MajorPage'

=======
import IndexPage from '../views/IndexPage'
import MajorSelectionPage from '../views/MajorSelectionPage'
import ProfilePage from '../views/ProfilePage'
import GeneralQuestionPage from '../views/GeneralQuestionPage'
import MajorQuestionPage from '../views/MajorQuestionPage'
import SummaryPage from '../views/SummaryPage'
>>>>>>> 46cfc3e8729273b1df4609f0d2fa63b2650253ad
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
<<<<<<< HEAD
      path: '/select_major',
      name: 'Major',
      component: MajorPage
=======
      path: '/steps',
      named: 'index',
      component: IndexPage,
      children: [
        {
          path: '',
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
        }
      ]
>>>>>>> 46cfc3e8729273b1df4609f0d2fa63b2650253ad
    }
  ],
  mode: 'history'
})
