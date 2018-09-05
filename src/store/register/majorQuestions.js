export default {
  state: {
    majorQuestions: {
      data: {
        majorQuestions: []
      },
      major: '',
      completed: false
    }
  },
  mutations: {
    setMajorQuestions (state, payload) {
      state.majorQuestions.data = payload
    },
    setMajor (state, payload) {
      state.majorQuestions.major = payload
    }
  },
  actions: {
    addMajorQuestions ({ commit }, payload) {
      commit('setMajorQuestions', payload)
    },
    completeMajorQuestions ({ commit }, payload) {
      console.log('completeing major Questions')
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
