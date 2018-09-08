export default {
  state: {
    majorQuestions: {
      data: {
        majorQuestions: []
      }
    }
  },
  mutations: {
    setMajorQuestions (state, payload) {
      state.majorQuestions.data = payload
    },
    setMajor (state, payload) {
      state.majorQuestions.major = payload.major
    },
    setCompleteMajorQuestions (state, payload) {
      state.majorQuestions.complete.complete = payload
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
    major (state) {
      return state.majorQuestions.major
    }
  }
}
