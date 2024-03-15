function solution(s, d) {
    let a=[]
    d.forEach(x=>{
        let c=0
        s.forEach(a=>{
            if(x.includes(a)) c++
        })
        if(c===s.length) a.push(x)
    })
    return a.length?1:2
}