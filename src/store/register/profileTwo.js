export default {
  state: {
    profileTwo: {
      data: {
        address: '',
        province: '',
        postNumber: '',
        email: '',
        contactNumber: '',
        parentName: '',
        parentContactNumber: '',
        parentRelationship: '',
        skypeId: '',
        shirtSize: '',
        disease: '',
        food: '',
        allergicFood: ''
      },
      complete: false
    }
  },
  mutations: {
    setProfileTwo (state, payload) {
      state.profileTwo.data = payload
    },
    clearProfileTwo (state) {
      state.profileOne.data = null
    },
    setCompleteProfileTwo (state, payload) {
      state.profileTwo.complete = payload
    }
  },
  actions: {
    completeProfileTwo ({commit}, payload) {
      commit('setCompleteProfileTwo', payload)
    }
  },
  getters: {
    profileTwo (state) {
      return state.profileTwo
    }
  }
}
