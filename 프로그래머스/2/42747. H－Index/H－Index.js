function solution(citations) {
    let c=0
    while(c+1<=citations.sort((a,b)=>b-a)[c]) c++
    return c
    
}