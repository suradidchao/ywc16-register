import { getSubsetObject } from '../../utils/helper'
export default {
  state: {
    generalQuestions: {
      data: {
        generalQuestions: []
      },
      complete: false
    }
  },
  mutations: {
    setGeneralQuestions (state, payload) {
      const generalQuestionsSchema = {
        generalQuestions: []
      }
      let generalQuestionsState = getSubsetObject(payload, generalQuestionsSchema)
      state.generalQuestions.data = generalQuestionsState
    },
    clearGeneralQuestions (state) {
      state.generalQuestions.data = null
    },
    setCompleteGeneralQuestions (state, payload) {
      state.generalQuestions.complete = payload
    }
  },
  actions: {
    addGeneralQuestions ({ commit }, payload) {
      commit('setGeneralQuestions', payload)
    },
    completeGeneralQuestions ({ commit }, payload) {
      commit('setCompleteGeneralQuestions', payload)
    }
  },
  getters: {
    generalQuestions (state) {
      console.log('generalQuestions state')
      console.log(state.generalQuestions)
      return state.generalQuestions
    }
  }
}
