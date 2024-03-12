function solution(a) {
    let c=0
    a.map(x=>x.toString().split``).flat().forEach(x=>{
        if(x==7) c++
    })
    return c
}