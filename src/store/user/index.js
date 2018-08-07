import {
  loadFbSdk,
  getFbLoginStatus,
  fbLogout,
  fbLogin
} from '../../core/facebook.js'

export default {
  state: {
    user: null,
    auth: null
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

    loadFb ({
      commit
    }, payload) {
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
    }, payload) {
      // commit('setLoading', true)
      // commit('clearError')

      fbLogin(payload.loginOptions)
        .then(response => {
          if (response.status === 'connected') {
            commit('setAuth', true)
            console.log(response)
            // const newUser = {
            //   id: response.authResponse.userID,
            //   name: user.displayName,
            //   email: user.email,
            //   photoUrl: user.photoURL,
            //   token: response.authResponse.accessToken
            // }
            // commit('setUser', newUser)
          } else {
            commit('setAuth', false)
          }
          // this.$emit('login', {
          //   response,
          //   FB: window.FB
          // })
        }).catch(
          error => {
            // commit('setLoading', false)
            // commit('setError', error)
            console.log(error)
          }
        )
    },
    // autoSignIn ({
    //   commit
    // }, payload) {
    //   commit('setUser', {
    //     id: payload.uid,
    //     name: payload.displayName,
    //     email: payload.email,
    //     photoUrl: payload.photoURL
    //   })
    // },
    logout ({
      commit
    }) {
      fbLogout().then(() => {
        commit('setAuth', false)
      })
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
