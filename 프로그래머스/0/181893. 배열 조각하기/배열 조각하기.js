function solution(a, q) {
    q.forEach((x,i)=>{
        if(i%2) a=[...a.slice(x)]
        else a=[...a.slice(0,x+1)]
    })
    return a
}