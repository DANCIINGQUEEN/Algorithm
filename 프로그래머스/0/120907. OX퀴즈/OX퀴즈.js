function solution(q) {
    return q.map(x=>{
        let [q,w,e,_,t]=x.split` `
        if(w==='+') return (+q+ +e=== +t)?'O':'X'
        else return (+q- +e=== +t)?'O':'X'
    })
}