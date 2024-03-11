function solution(b, k) {
    let a=0
    for(let i=0;i<b.length;i++){
        for(let j=0;j<b[0].length;j++){
            if(i+j<=k)  a+=b[i][j]
        }
    }
    return a
}