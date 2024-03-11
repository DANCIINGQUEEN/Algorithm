function solution(a, d, inc) {
    return inc.map((x,i)=>x?(a+i*d):0).reduce((a,c)=>a+c)
}