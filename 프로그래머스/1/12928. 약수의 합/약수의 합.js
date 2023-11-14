// function solution(n) {
//     if(n===0) return 0
//     let l=[]
//     for(let i=1;i<=n;i++){
//         if(n%i===0) l.push(i)
//     }
//     return l.reduce((a,c)=>a+c)
    
// }
function solution(n){
    let s=0
    for(let i=1;i<=n;i++){
        if(n%i===0) s+=i
    }
    return s
}
// const solution=n=>n===0?0:new Array(n).fill(1).map((x,i)=>x*(i+1)).filter((x,i)=>n%(i+1)===0?i:0).reduce((a,c)=>a+c, 1)