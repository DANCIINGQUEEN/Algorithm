function solution(n) {
    // return Math.max(n.reduce((a,b,i)=>a+((i+1)%2)?b:0,0),n.reduce((a,b,i)=>a+((i+1)%2)?0:b,0))
    // n.reduce((a,b,i)=>{
    //     console.log(a,b,i+1,a+ ((i+1)%2)?b:0)
    //     return a+ ((i+1)%2)?b:0
    // },0)
    // return [n.reduce((a,b,i)=>a+((i+1)%2)?b:0,0),n.reduce((a,b,i)=>a+((i+1)%2)?0:b,0)]
    let 짝=0
    let 홀=0
    for(let i=0;i<n.length;i++){
        if((i+1)%2) 홀+=n[i]
        else 짝+=n[i]
    }
    return Math.max(짝, 홀)
}