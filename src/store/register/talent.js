export default {
  state: {
    talent: {
      knowCamp: [],
      activities: '',
      completed: false
    }
  },
  mutations: {
    setKnowCamp (state, payload) {
      state.talent.knowCamp = payload
    },
    setActivities (state, payload) {
      state.talent.activities = payload
    },
    clearKnowCamp (state) {
      state.talent.knowCamp = null
    },
    clearActivities (state) {
      state.talent.activities = null
    },
    setCompleteTalent (state, payload) {
      state.profileTwo.completed = payload
    }
  },
  actions: {
    completeTalent ({ commit }, payload) {
      commit('setCompleteTalent', payload)
    }
  },
  getters: {
    talent (state) {
      return state.profileTwo
    }
  }
}
