import {store} from '../store'

export default (to, from, next) => {
  // const majorUser = store.getters.major
  const profileOne = store.getters.profileOne
  const profileTwo = store.getters.profileTwo
  const generalQuestions = store.getters.generalQuestions
  const talent = store.getters.talentCompleted
  let majorQuestions = store.getters.completeMajorQuestions
  // if (majorUser === 'design') {
  //   majorQuestions = store.getters.designQuestions
  // } else if (majorUser === 'marketing') {
  //   majorQuestions = store.getters.marketingQuestions
  // } else if (majorUser === 'content') {
  //   majorQuestions = store.getters.contentQuestions
  // } else if (majorUser === 'programming') {
  //   majorQuestions = store.getters.programmingQuestions
  // }
  console.log('profileOne', profileOne.complete)
  console.log('profileTwo', profileTwo.complete)
  console.log('generalQuestions', generalQuestions.complete)
  console.log('talent', talent)
  console.log('majorQuestions', majorQuestions)
  if (profileOne.complete === true && profileTwo.complete === true && talent === true && generalQuestions.complete === true && majorQuestions === true) {
    next()
  } else {
    next('/steps/1')
  }
}
