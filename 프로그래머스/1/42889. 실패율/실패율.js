// function solution(N, s) {
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
// }
function solution(N, s) {
    let c = new Array(N+1).fill(0)
    s.forEach(x=>x<=N?c[x]++:0)
    let nC=s.length
    let f=[]
    for(let i=1;i<=N;i++) {
        if(nC===0) f.push([i,0]) 
         else {
            f.push([i,c[i]/nC])
            nC-=c[i] 
        }
    }
    f.sort((a,b)=>b[1]-a[1])
    return f.map(x=>x[0])
}
