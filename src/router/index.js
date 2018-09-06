import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '../views/LoginPage'
import CompleteRegistrationPage from '../views/CompleteRegistrationPage'
import IndexPage from '../views/IndexPage'
import MajorSelectionPage from '../views/MajorSelectionPage'
import ProfilePage from '../views/ProfilePage'
import ContactInfoPage from '../views/ContactInfoPage'
import TalentPage from '../views/TalentPage'
import GeneralQuestionPage from '../views/GeneralQuestionPage'
import MajorQuestionPage from '../views/MajorQuestionPage'
import SummaryPage from '../views/SummaryPage'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/authen',
      name: 'authen',
      component: LoginPage
    },
    {
      path: '/complete',
      name: 'complete',
      component: CompleteRegistrationPage
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
          component: SummaryPage
          // beforeEnter: AuthGuard
        }
      ]
    }
  ],
  mode: 'history'
})
