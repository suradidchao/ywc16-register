export default {
  state: {
    majorQuestions: {
      data: {
        majorQuestions: []
<<<<<<< HEAD
      }
=======
      },
      major: '',
      completed: false
>>>>>>> c5f4223b13fc0d9041aa6caf887ea16074d85839
    }
  },
  mutations: {
    setMajorQuestions (state, payload) {
      state.majorQuestions.data = payload
    },
    setMajor (state, payload) {
<<<<<<< HEAD
      state.majorQuestions.major = payload.major
    },
    setCompleteMajorQuestions (state, payload) {
      state.majorQuestions.complete.complete = payload
=======
      state.majorQuestions.major = payload
>>>>>>> c5f4223b13fc0d9041aa6caf887ea16074d85839
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
