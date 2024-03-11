function solution(n) {
    let b=[]
    for(let i=0;i<n;i++){
        let a=[]
        for(let j=0;j<n;j++) a.push(j===i?1:0)
        b.push(a)
    }
    return b
}