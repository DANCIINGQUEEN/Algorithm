function solution(d) {
    let n=0
    let t=[]
    for(let i=0;i<d.length;i++){
        if(!isNaN(d[i])) n= +(d[i-1])===1?10:+d[i]
        let l=t.length
        if(d[i]==='S') t.push(n)
        if(d[i]==='D') t.push(n**2)
        if(d[i]==='T') t.push(n**3)
        if(d[i]==='*') {
            t[l-2]*=2
            t[l-1]*=2
        }
        if(d[i]==='#')  t[l-1]*=-1
    }
    return t.reduce((a,c)=>a+c,0)
}