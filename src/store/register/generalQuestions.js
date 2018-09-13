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
      for (let key in state.generalQuestions.data) {
        if (payload.hasOwnProperty(key)) { state.generalQuestions.data[key] = payload[key] }
      }
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
      return state.generalQuestions
    }
  }
}
