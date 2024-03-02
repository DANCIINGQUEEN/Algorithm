// function solution(order) {
//     let a=0
//     order.toString().split``.forEach(x=>{
//         if([3,6,9].includes(+x)) {
//         a++
//         }
//     })
//     return a
// }
let solution=o=>Array.from(o.toString()).filter(x=>[3,6,9].includes(+x)).length