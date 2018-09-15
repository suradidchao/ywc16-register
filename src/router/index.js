import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '../views/LoginPage'
import MajorNotChosenPage from '../views/MajorNotChosenPage'
import CompleteRegistrationPage from '../views/CompleteRegistrationPage'
import IndexPage from '../views/indexPage'
import ProfilePage from '../views/ProfilePage'
import ContactInfoPage from '../views/ContactInfoPage'
import TalentPage from '../views/TalentPage'
import GeneralQuestionPage from '../views/GeneralQuestionPage'
import MajorQuestionPage from '../views/MajorQuestionPage'
import SummaryPage from '../views/SummaryPage'
import getMajorPage from '../views/getMajorPage'
import AuthGuard from './auth-guard'
import AuthComplete from './auth-complete'
import AuthMajor from './auth-major'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/noMajor',
      name: 'noMajor',
      component: MajorNotChosenPage
    },
    {
      path: '/major/:major',
      name: 'getmajor',
      component: getMajorPage
    },
    {
      path: '/authen',
      name: 'authen',
      component: LoginPage,
      beforeEnter: AuthMajor

    },
    {
      path: '/complete',
      name: 'complete',
      component: CompleteRegistrationPage,
      beforeEnter: AuthComplete
    },
    {
      path: '/steps',
      named: 'index',
      component: IndexPage,
      children: [
        {
          path: '',
          name: 'authen1',
          redirect: '/authen'
        },
        // {
        //   path: 'selection',
        //   named: 'majorSelection',
        //   component: MajorSelectionPage
        // },
        {
          path: 'profile',
          named: 'profile',
          component: ProfilePage,
          alias: '1'
        },
        {
          path: 'contact',
          named: 'contactInfo',
          component: ContactInfoPage,
          alias: '2'
        },
        {
          path: 'talent',
          named: 'talent',
          component: TalentPage,
          alias: '3'
        },
        {
          path: 'general',
          named: 'generalQuestion',
          component: GeneralQuestionPage,
          alias: '4'
        },
        {
          path: 'major',
          named: 'majorQuestion',
          component: MajorQuestionPage,
          alias: '5'
        },
        {
          path: 'summary',
          named: 'summary',
          component: SummaryPage,
          alias: '6',
          beforeEnter: AuthGuard
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history'
})
