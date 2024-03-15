function solution(a, q) {
    return q.map(([s,e,k])=>a.slice(s,e+1).filter(i=>i>k).sort((a,b)=>a-b)[0]||-1)
}