function solution(N, s) {
    // let a=[]
    // let b=[s.length]
    // let c={}
    // for(let i=1;i<=N+1;i++){
    //     a.push(s.filter(x=>x>i).length)
    //     b.push(a[i-1])
    //     c[i+'']=(b[i-1]-a[i-1])/b[i-1]
    //     if(Object.keys(c).length>=N) break
    // }
    // let d=[]
    // for(let i in c) d.push([i, c[i]])
    // d=d.sort((a,b)=>b[1]-a[1])
    // return d.map(x=>+x[0])
    let a=[]
    for(let i=1;i<=N;i++){
        let r=s.filter(x=>x>=i).length
        let c=s.filter(x=>x===i).length
        a.push([i,c/r])
    }
    a.sort((a,b)=>b[1]-a[1])
    return a.map(x=>x[0])
}