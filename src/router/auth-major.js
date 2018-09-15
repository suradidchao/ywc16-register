
export default (to, from, next) => {
  if (from.name === 'getmajor' || from.fullPath === '/steps/1' || from.fullPath === '/steps/2' || from.fullPath === '/steps/3' || from.fullPath === '/steps/4' || from.fullPath === '/steps/5' || from.fullPath === '/steps/6') {
    next()
  } else {
    next('/noMajor')
  }
}
