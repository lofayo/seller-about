function starArray(n) {
  let m = Math.round(n)
  let result = []
  for (let i = 0; i < 5; i++) {
    if ( i < m) {
      result[i] = 1
    } else {
      result[i] = 0
    }
  }
  return result
}

export default {
  starArray
}