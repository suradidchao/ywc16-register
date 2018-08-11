export default {
  state: {
    profileOne: {
      data: {
        picture: '',
        title: '',
        firstName: '',
        lastName: '',
        firstNameEN: '',
        lastNameEN: '',
        nickName: '',
        birthdate: '',
        sex: '',
        blood: '',
        religion: '',
        academicYear: '',
        university: '',
        faculty: '',
        department: ''
      },
      complete: false
    }
  },
  mutations: {
    setProfileOne (state, payload) {
      state.profileOne.data = payload
    },
    clearProfileOne (state) {
      state.profileOne.data = null
    },
    setCompleteProfileOne (state, payload) {
      state.profileOne.complete = payload
    }
  },
  actions: {
    completeProfileOne ({commit}, payload) {
      commit('setCompleteProfileOne', payload)
    }
  },
  getters: {
    profileOne (state) {
      return state.profileOne
    }
  }
}
