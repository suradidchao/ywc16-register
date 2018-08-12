import {store} from '../store'

export default (to, from, next) => {
  const majorUser = store.getters.major
  const profileOne = store.getters.profileOne
  const profileTwo = store.getters.profileTwo
  const generalQuestions = store.getters.generalQuestions
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

  if (profileOne.complete === true && profileTwo.complete === true && generalQuestions.complete === true && majorQuestions.complete === true) {
    next()
  } else {
    next('/profile')
  }
}