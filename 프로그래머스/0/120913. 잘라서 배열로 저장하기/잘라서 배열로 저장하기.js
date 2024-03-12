function solution(m, n) {
    let b=[]
    for(let i=0;i<m.length;i+=n) b.push(m.slice(i,i+n))
    return b
}