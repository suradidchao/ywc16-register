import {store} from '../store'

export default (to, from, next) => {
  const majorUser = store.getters.major
  const profileOne = store.getters.profileOne
  const profileTwo = store.getters.profileTwo
  const generalQuestions = store.getters.generalQuestions
  const talent = store.getters.talentCompleted
  let majorQuestions = null
  if (majorUser === 'design') {
    majorQuestions = store.getters.designQuestions
  } else if (majorUser === 'marketing') {
    majorQuestions = store.getters.marketingQuestions
  } else if (majorUser === 'content') {
    majorQuestions = store.getters.contentQuestions
  } else if (majorUser === 'programming') {
    majorQuestions = store.getters.programmingQuestions
  }
  console.log(talent)
  if (profileOne.complete === true && profileTwo.complete === true && talent === true && generalQuestions.complete === true && majorQuestions.complete === true) {
    next()
  } else {
    next('/steps/profile')
  }
}
