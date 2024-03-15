function solution(d) {
    d.sort((a,b)=>a[0]-b[0])
    return (d[1][1]-d[0][1])*(d[2][0]-d[1][0])
}