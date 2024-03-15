function solution(c) {
    let d=c[1]-c[0]
    let m=c[1]/c[0]
    if(c[2]-c[1]===d) return c[c.length-1]+d
    else return c[c.length-1]*m
}