function solution(s) {
    let ss=s.map(x=>x.length)
    let r={}
    ss.forEach(x=>{
        r[x]=(r[x]||0)+1
    })
    return Math.max(...Object.values(r))
}