import {
  loadFbSdk,
  getFbLoginStatus,
  fbLogout,
  fbLogin
} from '../../core/facebook.js'

export default {
  state: {
    user: null,
    auth: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setAuth (state, payload) {
      state.auth = payload
    }
  },
  actions: {
    loadFb ({commit}) {
      // commit('setLoading', true)
      // commit('clearError')
      loadFbSdk()
        .then(getFbLoginStatus)
        .then(response => {
          if (response.status === 'connected') {
            commit('setAuth', true)
          }
        })
        .catch(
          error => {
            // commit('setLoading', false)
            // commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({
      commit
    }) {
      // commit('setLoading', true)
      // commit('clearError')
      fbLogin()
        .then(response => {
          if (response.status === 'connected') {
            commit('setAuth', true)
            window.localStorage.setItem('ywc16_access_token', response.authResponse.accessToken)
            const newUser = {
              id: response.authResponse.userID,
              token: response.authResponse.accessToken
            }
            commit('setUser', newUser)
          } else {
            commit('setAuth', false)
          }
        }).catch(
          error => {
            // commit('setLoading', false)
            // commit('setError', error)
            console.log(error)
          }
        )
    },
    autoSignIn ({
      commit
    }, payload) {
      commit('setAuth', payload)
    },
    logout ({commit}) {
      fbLogout()
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
    }
  }
}
