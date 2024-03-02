// function solution(n) {
//     let a=[]
//     for(let i=1;i<=n;i++){
//         if(!(n%i)) a.push(i)
//     }
//     return a
// }
let solution=n=>Array.from({length:n},(_,i)=>i+1).filter(x=>!(n%x))