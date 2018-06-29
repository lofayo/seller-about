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


function timestampToTime(timestamp) {  
  let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000  
  let Y = date.getFullYear() + '-';  
  let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';  
  let D = date.getDate() + ' ';  
  let h = date.getHours() + ':';  
  let m = date.getMinutes(); 
  return Y+M+D+h+m;  
}

export default {
  starArray,
  timestampToTime
}