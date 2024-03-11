function solution(l, n) {
    return [...l.splice(n,l.length),...l.splice(0,n)]
}