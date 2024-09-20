
Function.prototype.call2 = function (obj = {}, ...items) {
    let temp = {...obj}
    temp.fn = this
    let result = temp.fn(...items)
    delete temp.fn

    return result 
}

Function.prototype.apply2 = function (obj = {}, arr) {
  let temp = {...obj}

  if(Array.isArray(arr)) {
      temp.fn = this
      temp.fn(...arr) 
      delete temp.fn
  }else {
      throw new Error('Last argument is not a array')
  }
}

Function.prototype.bind2 = function (obj) {
  let temp = {...obj}
  temp.fn = this

  return function (...items) {
      let result = temp.fn(...items)
      
      delete temp.fn

      return result
  }
}


