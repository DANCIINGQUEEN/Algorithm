function solution(n) {
    return n.sort((a,b)=>a-b).slice(5,n.length)
}