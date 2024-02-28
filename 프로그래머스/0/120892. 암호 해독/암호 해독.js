function solution(c, n) {
    return [...c].filter((x,i)=>!((i+1)%n)).join``
}