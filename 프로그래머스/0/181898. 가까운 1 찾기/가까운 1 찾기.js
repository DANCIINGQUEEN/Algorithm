function solution(arr, idx) {
   for(let i=idx;i<arr.length;i++){
       if(arr[i]===1&&i>=idx) {
           return i
           break
       } 
       else continue
   }
    return -1
}