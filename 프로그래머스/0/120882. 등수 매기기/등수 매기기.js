function solution(s) {
    let ss=s.map(x=>(x[0]+x[1])/2)
    let o=s.map(x=>(x[0]+x[1])/2).sort((a,b)=>b-a)
    return ss.map(x=>o.indexOf(x)+1)
}