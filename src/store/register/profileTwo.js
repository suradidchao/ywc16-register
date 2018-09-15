export default {
  state: {
    profileTwo: {
      data: {
        address: '',
        province: '',
        postalCode: '',
        email: '',
        phone: '',
        emergencyName: '',
        emergencyPhone: '',
        emergencyPhoneRelated: '',
        skype: '',
        shirtSize: '-',
        disease: '',
        food: '',
        foodAllergy: '',
        med: '',
        medAllergy: ''
      },
      complete: false
    }
  },
  mutations: {
    setProfileTwo (state, payload) {
      for (let key in state.profileTwo.data) {
        if (payload.hasOwnProperty(key)) { state.profileTwo.data[key] = payload[key] }
      }
    },
    clearProfileTwo (state) {
      state.profileTwo.data = null
    },
    setCompleteProfileTwo (state, payload) {
      state.profileTwo.complete = payload
    }
  },
  actions: {
    completeProfileTwo ({ commit }, payload) {
      commit('setCompleteProfileTwo', payload)
    }
  },
  getters: {
    profileTwo (state) {
      return state.profileTwo
    }
  }
}
