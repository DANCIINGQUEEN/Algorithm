function solution(n) {
    let b=new Set()
    for(let i=0;i<n.length;i++){
        for(let j=0;j<i;j++){
            b.add(n[i]*n[j])
        }
    }
    return [...b].sort((a,b)=>b-a)[0]
}