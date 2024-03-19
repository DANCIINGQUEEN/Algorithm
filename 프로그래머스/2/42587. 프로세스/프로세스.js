function solution(p, l) {
    let r=[]
    p=p.map((x,i)=>[i,x])
    let a=p[l]
    while(p.length){
        let c=p.shift()
        p.some(([_,y])=>c[1]<y)?p.push(c):r.push(c)
    }
    return r.indexOf(a)+1
}