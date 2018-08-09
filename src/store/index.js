import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './user'
// import shared from './shared'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    completed: true
  },
  plugins: [createPersistedState()],
  modules: {
    user: user
    // shared: shared
  }
})
