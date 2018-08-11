export default {
  state: {
    generalQuestions: {
      data: {
        generalQuestions: '',
        generalQuestionsTwo: '',
        generalQuestionsThree: ''
      },
      complete: false
    }
  },
  mutations: {
    setGeneralQuestions (state, payload) {
      state.generalQuestions.data = payload
    },
    clearGeneralQuestions (state) {
      state.generalQuestions.data = null
    },
    setCompleteGeneralQuestions (state, payload) {
      state.generalQuestions.complete = payload
    }
  },
  actions: {
    addGeneralQuestions ({commit}, payload) {
      commit('setGeneralQuestions', payload)
    },
    completeGeneralQuestions ({commit}, payload) {
      commit('setCompleteGeneralQuestions', payload)
    }
  },
  getters: {
    generalQuestions (state) {
      return state.generalQuestions
    }
  }
}
