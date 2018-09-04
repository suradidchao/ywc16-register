export default {
  state: {
    talent: {
      data: {
        knowCamp: [],
        activities: ''
      },
      completed: false
    }
  },
  mutations: {
    setTalent (state, payload) {
      state.talent.data = payload
    },
    setKnowCamp (state, payload) {
      state.talent.data.knowCamp = payload
    },
    setActivities (state, payload) {
      state.talent.data.activities = payload
    },
    clearKnowCamp (state) {
      state.talent.data.knowCamp = null
    },
    clearActivities (state) {
      state.talent.data.activities = null
    },
    setCompleteTalent (state, payload) {
      state.talent.completed = payload
    }
  },
  actions: {
    completeTalent ({ commit }, payload) {
      commit('setCompleteTalent', payload)
    }
  },
  getters: {
    talent (state) {
      // let talentState = { ...state }
      // delete talentState.talent['completed']
      return state.talent.data
    },
    talentCompleted (state) {
      return state.talent.completed
    }
  }
}
