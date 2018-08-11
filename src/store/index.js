import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './user'
import register from './register'

Vue.use(Vuex)

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    user: user,
    register: register
  }
})
