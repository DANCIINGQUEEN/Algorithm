function solution(arr) {
    // let l=[]
    // arr.forEach(x=>{
    //     for(let i=0;i<x;i++) l.push(x)
    // })
    // return l
    return arr.map(x=>Array(x).fill(x)).flat()
}