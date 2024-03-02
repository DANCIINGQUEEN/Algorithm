// function solution(n, direction) {
//     if(direction==='right'){
//         let a=n.pop()
//         n=[a, ...n]
//     }else{
//         let a=n.shift()
//         n=[...n, a]
//     }
//     return n
// }
let solution=(n, d)=>{
    d==='left'?n.push(n.shift()):n.unshift(n.pop())
    return n
}