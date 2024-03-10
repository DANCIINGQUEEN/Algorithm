function solution(m, l) {
    return l.reduce((a,b)=>a+m[b],'')
}