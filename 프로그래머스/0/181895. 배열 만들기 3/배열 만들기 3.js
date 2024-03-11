function solution(a, i) {
     return i.map(x=>a.slice(x[0],x[1]+1)).flat()
}