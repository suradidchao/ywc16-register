
export default (to, from, next) => {
  if (from.path === '/') {
    next('authen')
  } else {
    next()
  }
}
