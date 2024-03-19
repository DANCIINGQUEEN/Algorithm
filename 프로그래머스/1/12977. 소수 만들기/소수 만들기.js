function solution(n) {
    let r=[]
    let p=a=>{
        for(let i=2;i<=Math.sqrt(a);i++) {
            if(!(a%i)) return false
        }
        return true
    }
    let s=n.length
    for(let i=0;i<s;i++){
        for(let j=i+1;j<s;j++){
            for(let k=j+1;k<s;k++){
                let a=n[i]+n[j]+n[k]
                if(p(a)) r.push(a)
            }
        }
    }
    return r.length
}