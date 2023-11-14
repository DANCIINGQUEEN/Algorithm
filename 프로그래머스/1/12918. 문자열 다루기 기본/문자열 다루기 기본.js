function solution(s) {
    return ((s.length==4||s.length==6)&&!([...s].map(x=>x=isNaN(x)?1:0).reduce((a,c)=>a+c, 0)))
}