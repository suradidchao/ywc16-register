/* eslint-disable */

export const isEmpty = (obj) => {
  var result = []
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === "" || obj[key] === {} || obj[key] === []) {
        result.push(key)
      }
    }
  }
  if (result.length == 0) {
    return false
  } else {
    return true
  }
};

export const getSubsetObject = (obj, schema) => {
  return Object.keys(obj)
    .filter(k => Object.keys(schema).includes(k))
    .map(k => Object.assign({}, { [k]: obj[k] }))
    .reduce((res, o) => Object.assign(res, o), {});
}


