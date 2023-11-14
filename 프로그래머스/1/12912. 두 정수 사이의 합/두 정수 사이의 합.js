function solution(a, b) {
    let s=0
    let [x,y]=[a,b].sort((a,b)=>a-b)
    for(let i=x;i<=y;i++) s+=i
    return s
}