function solution(a, n) {
    a.sort((a,b)=>Math.abs(n-a)-Math.abs(n-b)||a-b)
    return a[0] 
}