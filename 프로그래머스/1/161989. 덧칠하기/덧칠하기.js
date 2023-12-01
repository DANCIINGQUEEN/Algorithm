// function solution(n, m, section) {
//     let a=0, p=0
//     for(let i of section){
//         if(p<i){
//             a++
//             p=i+m-1
//         }
//     }
//     return a
// }
const solution=(n,m,section)=>section.reduce((a,i)=>{return(a.p<i)?{a:a.a+1,p:i+m-1}:a},{a:0,p:0}).a