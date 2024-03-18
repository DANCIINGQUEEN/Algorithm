function solution(n, l, p) {
    let a=0
    for(let i=1;i<=n;i++){
        let d=0
        for(let j=1;j<=Math.sqrt(i);j++){
            if(!(i%j)) i/j===j?d++:d+=2
            if(d>l){
                d=p
                break
            }
        }
        a+=d
    }
    return a
}