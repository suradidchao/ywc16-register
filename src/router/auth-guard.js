import { store } from '../store'

let userInfoMissingAlert = (state) => {
  let message = 'กรุณากรอกข้อมูลให้ครบถ้วนใน Step ดังนี้:  '
  if (!state.profileCompleteOneStatus) {
    message = message + '1,'
  }
  if (!state.profileTwoCompleteStatus) {
    message = message + '2,'
  }
  if (!state.talentCompleteStatus) {
    message = message + '3,'
  }
  if (!state.generalQuestionsCompleteStatus) {
    message = message + '4,'
  }
  if (!state.majorQuestionsCompleteStatus) {
    message = message + '5'
  }
  alert(message)
}

let navToFirstIncompletePage = (next, state) => {
  if (!state.profileCompleteOneStatus) {
    next('/steps/1')
  } else if (!state.profileTwoCompleteStatus) {
    next('/steps/2')
  } else if (!state.talentCompleteStatus) {
    next('/steps/3')
  } else if (!state.generalQuestionsCompleteStatus) {
    next('/steps/4')
  } else if (!state.majorQuestionsCompleteStatus) {
    next('/steps/5')
  }
}

export default (to, from, next) => {
  let state = {
    profileCompleteOneStatus: store.getters.profileOne.complete,
    profileTwoCompleteStatus: store.getters.profileTwo.complete,
    talentCompleteStatus: store.getters.talent.completed,
    generalQuestionsCompleteStatus: store.getters.generalQuestions.complete,
    majorQuestionsCompleteStatus: store.getters.majorQuestions.complete
  }

  if (state.profileCompleteOneStatus && state.profileTwoCompleteStatus && state.talentCompleteStatus && state.generalQuestionsCompleteStatus && state.majorQuestionsCompleteStatus) {
    next()
  } else {
    userInfoMissingAlert(state)
    navToFirstIncompletePage(next, state)
  }
}
