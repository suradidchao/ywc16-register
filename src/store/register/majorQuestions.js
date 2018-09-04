export default {
  state: {
    majorQuestions: {
      data: {
        design: [],
        content: [],
        marketing: [],
        programming: []
      },
      major: '',
      completed: false
    }
  },
  mutations: {
    setMajorQuestions (state, payload) {
      state.majorQuestions.data[state.major] = payload
    },
    setDesignQuestions (state, payload) {
      state.majorQuestions.design.data = payload
    },
    setMarketingQuestions (state, payload) {
      state.majorQuestions.marketing.data = payload
    },
    setContentQuestions (state, payload) {
      state.majorQuestions.content.data = payload
    },
    setProgrammingQuestions (state, payload) {
      state.majorQuestions.programming.data = payload
    },
    setCompleteDesignQuestions (state, payload) {
      state.majorQuestions.design.complete = payload
    },
    setCompleteMarketingQuestions (state, payload) {
      state.majorQuestions.marketing.complete = payload
    },
    setCompleteContentQuestions (state, payload) {
      state.majorQuestions.content.complete = payload
    },
    setCompleteProgrammingQuestions (state, payload) {
      state.majorQuestions.programming.complete = payload
    },
    setMajor (state, payload) {
      state.majorQuestions.major = payload.major
    }
  },
  actions: {
    addMajorQuestions ({ commit }, payload) {
      commit('setMajorQuestions', payload)
    },
    completeMajorQuestions ({ commit }, payload) {
      if (payload.major === 'design') {
        commit('setCompleteDesignQuestions', payload.complete)
      } else if (payload.major === 'marketing') {
        commit('setCompleteMarketingQuestions', payload.complete)
      } else if (payload.major === 'content') {
        commit('setCompleteContentQuestions', payload.complete)
      } else if (payload.major === 'programming') {
        commit('setCompleteProgrammingQuestions', payload.complete)
      }
    }
  },
  getters: {
    designQuestions (state) {
      return state.majorQuestions.design
    },
    marketingQuestions (state) {
      return state.majorQuestions.marketing
    },
    contentQuestions (state) {
      return state.majorQuestions.content
    },
    programmingQuestions (state) {
      return state.majorQuestions.programming
    },
    major (state) {
      return state.major
    }
  }
}
