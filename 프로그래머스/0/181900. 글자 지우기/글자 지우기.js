function solution(m, ind) {
    return [...m].filter((x,i)=>!ind.includes(i)).join``
}