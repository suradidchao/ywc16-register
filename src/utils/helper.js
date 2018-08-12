/* eslint-disable */

export const isEmpty = (obj) => {
  var result = []
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      if (obj[key] === "" || obj[key] === {}){
        result.push(key)
      }
    }
  }
  if(result.length == 0) {
    return false
  } else {
    return true
  }
};


