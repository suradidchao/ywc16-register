import { getSubsetObject } from '../../utils/helper'
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
        shirtSize: '',
        disease: '',
        food: '',
        foodAllergy: ''
      },
      complete: false
    }
  },
  mutations: {
    setProfileTwo (state, payload) {
      const profileTwoSchema = {
        address: '',
        province: '',
        postalCode: '',
        email: '',
        phone: '',
        emergencyName: '',
        emergencyPhone: '',
        emergencyPhoneRelated: '',
        skype: '',
        shirtSize: '',
        disease: '',
        food: '',
        foodAllergy: ''
      }
      let profileTwoState = getSubsetObject(payload, profileTwoSchema)
      state.profileTwo.data = profileTwoState
    },
    clearProfileTwo (state) {
      state.profileOne.data = null
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
