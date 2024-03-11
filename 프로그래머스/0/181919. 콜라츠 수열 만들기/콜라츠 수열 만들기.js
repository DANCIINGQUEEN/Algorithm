function solution(n) {
    let a=[]
    while(n!==1){
        a.push(n)
        
        if(n%2) {
            n=3*n+1
        }
        else {
            n=n/2
        }
    }
    a.push(1)
    return a
    
}