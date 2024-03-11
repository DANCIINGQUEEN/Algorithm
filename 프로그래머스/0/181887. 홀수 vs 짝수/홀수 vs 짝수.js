function solution(n) {
    return Math.max(n.reduce((a,b,i)=>a+((i%2)?b:0),0),n.reduce((a,b,i)=>a+((i%2)?0:b),0))
}