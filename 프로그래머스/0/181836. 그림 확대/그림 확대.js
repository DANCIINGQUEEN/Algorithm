function solution(p, k) {
    return p.map(x=>Array(k).fill([...x].map(i=>i.repeat(k)).join``)).flat()
}