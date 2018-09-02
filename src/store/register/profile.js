import { getSubsetObject } from '../../utils/helper'
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
        department: ''
      },
      complete: false
    }
  },
  mutations: {
    setProfileOne (state, payload) {
      const profileSchema = {
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
        department: ''
      }
      let profileState = getSubsetObject(payload, profileSchema)
      state.profileOne.data = profileState
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
