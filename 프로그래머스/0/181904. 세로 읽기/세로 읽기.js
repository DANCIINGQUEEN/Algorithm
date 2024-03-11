function solution(s, m, c) {
    return Array(s.length/m).fill().map((x,i)=>s.slice(m*i,m*i+m)).map(v=>v[c-1]).join``
}