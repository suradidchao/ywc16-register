import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './user'
import profile from './register/profile.js'
import profileTwo from './register/profileTwo.js'
import talent from './register/talent'
import generalQuestions from './register/generalQuestions.js'
import majorQuestions from './register/majorQuestions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    user: user,
    profile: profile,
    profileTwo: profileTwo,
    talent: talent,
    generalQuestions: generalQuestions,
    majorQuestions: majorQuestions
  },
  getters: {
    summary (state) {
      return {
        profile: { ...state.profile.profileOne.data, ...state.profileTwo.profileTwo.data, ...state.talent.talent.data },
        generalQuestions: { ...state.generalQuestions.generalQuestions.data },
        majorQuestions: { ...state.majorQuestions.majorQuestions.data }
      }
    }
  }
})
