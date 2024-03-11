function solution(l, f) {
    return l.filter((_,i)=>!f[i])
}