function solution(arr, divisor) {
    return !(arr.filter(x=>x%divisor===0).sort((a,b)=>a-b).length)?[-1]:arr.filter(x=>x%divisor===0).sort((a,b)=>a-b)
}