function solution(n) {
    let s=[]
    let i=2
    while(n!==1){
        if(!(n%i)){
            s.push(i)
            n/=i
            i=2
        }else i+=1
    }
    return Array.from(new Set(s))
}