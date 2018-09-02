import { getSubsetObject } from '../../utils/helper'
export default {
  state: {
    talent: {
      knowCamp: [],
      activities: ''
    },
    completed: false
  },
  mutations: {
    setTalent(state, payload) {
      const talentSchema = {
        knowCamp: [],
        activities: ''
      }
      const talentState = getSubsetObject(payload, talentSchema)
      state.talent = talentState
    },
    setKnowCamp(state, payload) {
      state.talent.knowCamp = payload
    },
    setActivities(state, payload) {
      state.talent.activities = payload
    },
    clearKnowCamp(state) {
      state.talent.knowCamp = null
    },
    clearActivities(state) {
      state.talent.activities = null
    },
    setCompleteTalent(state, payload) {
      state.completed = payload
    }
  },
  actions: {
    completeTalent({ commit }, payload) {
      commit('setCompleteTalent', payload)
    }
  },
  getters: {
    talent(state) {
      let talentState = { ...state }
      delete talentState.talent['completed']
      return talentState.talent
    },
    talentCompleted(state) {
      return state.completed
    }
  }
}
