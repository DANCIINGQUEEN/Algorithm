function solution(n) {
    let a=[]
    for(let i=1;i<=n;i++){
        if(!(n%i)) a.push(i)
    }
    return a
}