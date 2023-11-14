function solution(d, budget) {
    // console.log(d.sort((a,b)=>a-b).reduce((a,c)=>a+c))
    d.sort((a,b)=>a-b)
    // console.log(d)
    while(d.reduce((a,c)=>a+c,0)>budget){
        d.pop()
        // console.log(d)
    }
    return d.length
}