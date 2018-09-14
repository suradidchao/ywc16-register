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
        nickname: '',
        birthdate: '',
        sex: '',
        blood: '',
        religion: '',
        academicYear: '',
        university: '',
        faculty: '',
        department: '',
        educationStatus: 'อยู่ระหว่างการศึกษา',
        equivalentEducationDegree: '-',
        currentWorkingStatus: '-',
        workingStatusDescription: '-'
      },
      complete: false
    }
  },
  mutations: {
    setProfileOne (state, payload) {
      for (let key in state.profileOne.data) {
        if (payload.hasOwnProperty(key)) { state.profileOne.data[key] = payload[key] }
        state.profileOne.data[key] = state.profileOne.data[key]
      }
    },
    clearProfileOne (state) {
      state.profileOne.data = null
    },
    setCompleteProfileOne (state, payload) {
      state.profileOne.complete = payload
    }
  },
  actions: {
    completeProfileOne ({ commit }, payload) {
      commit('setCompleteProfileOne', payload)
    }
  },
  getters: {
    profileOne (state) {
      return state.profileOne
    }
  }
}
