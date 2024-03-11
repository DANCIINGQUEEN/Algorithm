function solution(p, k) {
//     return p.map(x=>{
//         x=[...x].map(i=>i.repeat(k)).join``
//         console.log(x)
//         console.log(x)
        
//         return Array(k).fill(x)
//     }).flat()
    return p.map(x=>Array(k).fill([...x].map(i=>i.repeat(k)).join``)).flat()
}