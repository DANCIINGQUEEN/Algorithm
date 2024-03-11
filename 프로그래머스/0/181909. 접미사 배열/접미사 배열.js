function solution(m) {
    let a=[]
    for(let i=0;i<m.length;i++){
        a.push([...m].slice(i,m.length).join``)
    }
    return a.sort()
}