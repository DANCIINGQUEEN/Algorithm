function solution(i, k, s, l) {
    return i.map(x=>+x.slice(s,s+l)).filter(x=>x>k)
}