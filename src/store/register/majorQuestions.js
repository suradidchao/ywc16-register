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
      for (let key in state.majorQuestions.data) {
        if (payload.hasOwnProperty(key)) { state.majorQuestions.data[key] = payload[key] }
      }
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
