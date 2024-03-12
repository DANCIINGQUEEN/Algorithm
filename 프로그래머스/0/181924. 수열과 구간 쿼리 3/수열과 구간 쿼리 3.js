function solution(a, q) {
    for(let i=0;i<q.length;i++)[a[q[i][0]],a[q[i][1]]]=[a[q[i][1]],a[q[i][0]]]
    return a
}