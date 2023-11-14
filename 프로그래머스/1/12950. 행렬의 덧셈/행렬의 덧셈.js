function solution(arr1, arr2) {
    // let a=[]
    // arr1.map((x,i)=>{
    //     let l=[]
    //     x.map((n,j)=>{
    //         n=n+arr2[i][j]
    //         l.push(n)
    //     })
    //     a.push(l)
    // })
    // return a
    return arr1.map((a,i)=>a.map((b,j)=>b+=arr2[i][j]))
}