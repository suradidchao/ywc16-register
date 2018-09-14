import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './user'
import profile from './register/profile.js'
import profileTwo from './register/profileTwo.js'
import talent from './register/talent'
import generalQuestions from './register/generalQuestions.js'
import majorQuestions from './register/majorQuestions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    user: user,
    profile: profile,
    profileTwo: profileTwo,
    talent: talent,
    generalQuestions: generalQuestions,
    majorQuestions: majorQuestions
  },
  mutations: {
    resetAppState (state, payload) {
      const userState = {
        data: {
          firstName: '',
          lastName: '',
          firstNameEN: '',
          lastNameEN: '',
          completed_at: '',
          major: '',
          status: ''
        }
      }
      const profileState = {
        data: {
          picture: '',
          title: '',
          firstName: '',
          lastName: '',
          firstNameEN: '',
          lastNameEN: '',
          nickname: '',
          birthdate: '',
          sex: '',
          blood: '',
          religion: '',
          academicYear: '',
          university: '',
          faculty: '',
          department: '',
          educationStatus: 'อยู่ระหว่างการศึกษา',
          equivalentEducationDegree: '-',
          currentWorkingStatus: '-',
          workingStatusDescription: '-'
        },
        complete: false
      }
      const contactInfoState = {
        data: {
          address: '',
          province: '',
          postalCode: '',
          email: '',
          phone: '',
          emergencyName: '',
          emergencyPhone: '',
          emergencyPhoneRelated: '',
          skype: '',
          shirtSize: '',
          disease: '',
          food: '',
          foodAllergy: ''
        },
        complete: false
      }

      const talentState = {
        data: {
          knowCamp: [],
          activities: ''
        },
        completed: false
      }

      const generalQuestionsState = {
        data: {
          generalQuestions: []
        },
        complete: false
      }

      const majorQuestionsState = {
        data: {
          majorQuestions: []
        },
        complete: false
      }
      state.user.user = userState
      state.profile.profileOne = profileState
      state.profileTwo.profileTwo = contactInfoState
      state.talent.talent = talentState
      state.generalQuestions.generalQuestions = generalQuestionsState
      state.majorQuestions.majorQuestions = majorQuestionsState
    }
  },
  getters: {
    summary (state) {
      return {
        profile: { ...state.profile.profileOne.data, ...state.profileTwo.profileTwo.data, ...state.talent.talent.data },
        generalQuestions: { ...state.generalQuestions.generalQuestions.data },
        majorQuestions: { ...state.majorQuestions.majorQuestions.data }
      }
    }
  }
})
