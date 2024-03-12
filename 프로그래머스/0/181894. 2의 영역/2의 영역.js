function solution(a) {
    let c=a.slice(a.indexOf(2),a.lastIndexOf(2)+1)
    return c.length?c:[-1]
}