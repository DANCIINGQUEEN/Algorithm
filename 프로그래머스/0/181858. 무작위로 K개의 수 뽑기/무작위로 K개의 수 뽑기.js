function solution(a, k) {
    let s=new Set(a)
    return s.size<k?[...s, ...Array(k-s.size).fill(-1)]:[...s].slice(0,k)
}