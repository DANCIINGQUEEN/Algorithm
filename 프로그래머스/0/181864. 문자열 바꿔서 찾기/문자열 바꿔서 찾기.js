function solution(m, p) {
    return +[...m].map(x=>x==='A'?'B':'A').join``.includes(p)
}