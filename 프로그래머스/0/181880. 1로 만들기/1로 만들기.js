function solution(n) {
    let a=0
    for(let i of n){
        while(i!==1){
            a++
            if(i%2) i=(i-1)/2
            else i/=2
        }
    }
    return a
}