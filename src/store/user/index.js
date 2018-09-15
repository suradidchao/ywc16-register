export default {
  state: {
    user: {
      data: {
        firstName: '',
        lastName: '',
        firstNameEN: '',
        lastNameEN: '',
        completed_at: '',
        major: '',
        status: ''
      }
    }
  },
  mutations: {
    setUser (state, payload) {
      for (let key in state.user.data) {
        if (payload.hasOwnProperty(key)) { state.user.data[key] = payload[key] }
      }
    },
    setMajor (state, payload) {
      state.user.data.major = payload
    }
  },
  getters: {
    user (state) {
      return state.user.data
    },
    major (state) {
      return state.user.data.major
    }
  }
}
