// function solution(n) {
//     let a=[]
//     for (let i =1;i<=n;i++){
//         if(n%i===0){
//             a.push([i, n/i])
//         }
//     }
//     return a.length
// }
const solution = n => Array.from({length: n}, (_, i) => n % (i + 1) === 0).filter(Boolean).length;
