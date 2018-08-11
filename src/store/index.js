import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './user'
import profile from './register/profile.js'
import generalQuestions from './register/generalQuestions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    user: user,
    profile: profile,
    generalQuestions: generalQuestions
  }
})
