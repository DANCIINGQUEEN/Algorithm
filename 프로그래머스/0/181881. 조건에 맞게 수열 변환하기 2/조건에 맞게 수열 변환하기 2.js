function solution(a) {
    let i=0
    let aa=a
    while(true){
        let c=aa.map(x=>{
            if(x>=50&&!(x%2)) return x/2
            if(x<50&&(x%2)) return x*2+1
            return x
        })
        let s=aa.every((x,i)=>x===c[i])
        if(s) break
        i++
        aa=c
    }
    return i
    
    
}