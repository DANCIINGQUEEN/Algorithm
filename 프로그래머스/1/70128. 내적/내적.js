function solution(a, b) {
    return a.reduce((x,c,i)=>x+c*b[i],0)
}