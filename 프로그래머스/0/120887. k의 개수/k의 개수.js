function solution(i, j, k) {
    let a=0
    for(let x=i;x<=j;x++){
        [...x+''].forEach(x=>{
            if(x==k) a++
        })
    }
    return a
}