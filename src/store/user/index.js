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
      state.user.data = payload
    }
  },
  getters: {
    user (state) {
      return state.user.data
    }
  }
}
