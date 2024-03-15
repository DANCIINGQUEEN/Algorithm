function solution(m, q) {
    q.forEach(x=>{
        m=m.slice(0,x[0])+[...m.slice(x[0],x[1]+1)].reverse().join``+m.slice(x[1]+1)
    })
    return m
}