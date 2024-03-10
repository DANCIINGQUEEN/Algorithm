function solution(n) {
    return n[n.length-1]>n[n.length-2]?
        [...n,n[n.length-1]-n[n.length-2]]
    :
    [...n,n[n.length-1]*2]
}