function solution(m, p) {
    return m.map((x,i)=>x.slice(p[i][0],p[i][1]+1)).join``
}