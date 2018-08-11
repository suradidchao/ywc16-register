export default {
  state: {
    user: {
      major: ''
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setMajor (state, payload) {
      state.user.major = payload
    }
  },
  actions: {
    saveMajor ({
      commit
    }, payload) {
      commit('setMajor', payload)
    }
    // logout ({commit}) {
    //   commit('setUser', null)
    // }
  },
  getters: {
    user (state) {
      return state.user
    },
    major (state) {
      return state.user.major
    }
  }
}
