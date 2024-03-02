function solution(n) {
    let a=0
    for(let i=1;i<=n;i++){
        let b=0
        for(let j=1;j<=i;j++){
            if(!(i%j)) b++
        }
        if(b>=3) a++
    }
    return a
}