export default {
  state: {
    majorQuestions: {
      design: {
        data: {
          majorQuestions: '',
          majorQuestionsTwo: '',
          majorQuestionsThree: '',
          majorQuestionsFour: ''
        },
        complete: false
      },
      marketing: {
        data: {
          majorQuestions: '',
          majorQuestionsTwo: '',
          majorQuestionsThree: '',
          majorQuestionsFour: ''
        },
        complete: false
      },
      content: {
        data: {
          majorQuestions: '',
          majorQuestionsTwo: '',
          majorQuestionsThree: '',
          majorQuestionsFour: ''
        },
        complete: false
      },
      programming: {
        data: {
          majorQuestions: '',
          majorQuestionsTwo: '',
          majorQuestionsThree: '',
          majorQuestionsFour: ''
        },
        complete: false
      }

    }
  },
  mutations: {
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
    }
  },
  actions: {
    addMajorQuestions ({commit}, payload) {
      if (payload.major === 'design') {
        commit('setDesignQuestions', payload.formData)
      } else if (payload.major === 'marketing') {
        commit('setMarketingQuestions', payload.formData)
      } else if (payload.major === 'content') {
        commit('setContentQuestions', payload.formData)
      } else if (payload.major === 'programming') {
        commit('setProgrammingQuestions', payload.formData)
      }
    },
    completeMajorQuestions ({commit}, payload) {
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
    }
  }
}
