function solution(m) {
    return [...m].filter(x=>!(isNaN(x))).map(x=>+x).sort()
}