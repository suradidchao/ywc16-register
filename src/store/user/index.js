// import {
//   loadFbSdk,
//   getFbLoginStatus,
//   fbLogout,
//   fbLogin
// } from '../../core/facebook.js'

export default {
  state: {
    user: {
      major: ''
    },
    auth: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setAuth (state, payload) {
      state.auth = payload
    },
    setMajor (state, payload) {
      state.user.major = payload
      window.localStorage.setItem('ywc16_major', payload)
    }
  },
  actions: {
    saveMajor ({
      commit
    }, payload) {
      commit('setMajor', payload)
    },
    loadFb ({commit}) {
      // commit('setLoading', true)
      // commit('clearError')
    },
    signUserIn ({commit}) {
      // commit('setLoading', true)
      // commit('clearError')
    },
    autoSignIn ({
      commit
    }, payload) {
      commit('setAuth', payload)
    },
    logout ({commit}) {
      // fbLogout()
      commit('setAuth', false)
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuth (state) {
      return state.auth
    },
    major (state) {
      return state.user.major
    }
  }
}
