// function solution(n) {
//     let b=new Set()
//     for(let i=0;i<n.length;i++){
//         for(let j=0;j<i;j++){
//             b.add(n[i]*n[j])
//         }
//     }
//     return [...b].sort((a,b)=>b-a)[0]
// } 시간복잡도 O(n^2)

function solution(n){
    n.sort((a,b)=>a-b)
    let a=n.length
    let x=n[a-1]*n[a-2]
    let m=n[0]*n[1]
    return Math.max(x, m)
}