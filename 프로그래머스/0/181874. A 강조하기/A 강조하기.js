function solution(m) {
    return [...m].map(x=>{
        if(x==='a') return x.toUpperCase()
        else if(x===x.toUpperCase()&&x!=='A') return x.toLowerCase()
        else return x
    }).join``
}