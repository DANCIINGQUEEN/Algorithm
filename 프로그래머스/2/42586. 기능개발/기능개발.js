function solution(p, s) {
    let a=[]
    let r=[]
    for(let i=0;i<p.length;i++){
        a.push(Math.ceil((100-p[i])/s[i]))
    }
    while(a.length>0){
        while(a[0]>0){
            for(let i in a){
                a[i]--
            }        
        }
        let i=0
        while(a[0]<=0){
            i++
            a.shift()
        }
        r.push(i)
    }
    return r
}