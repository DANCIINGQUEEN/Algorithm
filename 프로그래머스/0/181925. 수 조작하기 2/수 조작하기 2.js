function solution(n) {
    let a=[]
    for(let i=0;i<n.length;i++){
        if(n[i+1]-n[i]===1) a.push('w')
        if(n[i+1]-n[i]===10) a.push('d')
        if(n[i+1]-n[i]===-1) a.push('s')
        if(n[i+1]-n[i]===-10) a.push('a')
    }
    return a.join``
}