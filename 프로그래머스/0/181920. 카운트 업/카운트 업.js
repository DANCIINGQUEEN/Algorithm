function solution(s, e) {
    return Array.from({length:e+1-s},(_,i)=>s+i)
}