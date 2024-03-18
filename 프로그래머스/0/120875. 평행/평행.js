function solution(d) {
    let a=0
    function s(a1,a2,a3,a4){
        let q=(a2[1]-a1[1])/(a2[0]-a1[0])
        let w=(a4[1]-a3[1])/(a4[0]-a3[0])
        if(q===w) a+=1
    }
    s(d[0],d[1],d[2],d[3])
    s(d[0],d[2],d[1],d[3])
    s(d[0],d[3],d[2],d[1])
    return a>0?1:0
}