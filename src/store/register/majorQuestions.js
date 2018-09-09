export default {
  state: {
    majorQuestions: {
      data: {
        majorQuestions: []
      },
      complete: false
    }
  },
  mutations: {
    setMajorQuestions (state, payload) {
      state.majorQuestions.data = payload
    },
    setCompleteMajorQuestions (state, payload) {
      state.majorQuestions.complete = payload
    }
  },
  actions: {
    addMajorQuestions ({ commit }, payload) {
      commit('setMajorQuestions', payload)
    },
    completeMajorQuestions ({ commit }, payload) {
      commit('setCompleteMajorQuestions', payload)
    }
  },
  getters: {
    majorQuestions (state) {
      return state.majorQuestions
    },
    completeMajorQuestions (state) {
      return state.majorQuestions.complete
    }
  }
}
