// function solution(s){
//     let a=s.toUpperCase()
//     let b=0
//     let c=0
//     a.split``.forEach(x=>{
//         if(x==='P') b++
//         else if(x==='Y') c++
//     })
//     return b===c?true:false
// }

const solution=s=>s.toUpperCase().split('P').length===s.toUpperCase().split('Y').length