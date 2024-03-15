function solution(a, q) {
    // let r=[]
    // let w=[]
    // q.forEach(([s,e,k])=>{
    //     for(let i=s;i<=e;i++) if(a[i]>k) w.push(a[i])
    //     w.sort((a,b)=>a-b)
    //     r.push(w.length?w[0]:-1)
    //     w=[]
    // })
    // return r
    let r=[]
    q.forEach(([s,e,k])=>{
        let w=a.slice(s,e+1).filter(x=>x>k).sort((a,b)=>a-b)[0]
        r.push(w?w:-1)
    })
    return r
}