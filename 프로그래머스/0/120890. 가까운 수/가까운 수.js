function solution(a, n) {
    return a.sort((a,b)=>Math.abs(n-a)-Math.abs(n-b)||a-b)[0]
}