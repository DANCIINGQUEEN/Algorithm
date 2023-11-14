function solution(sizes) {
    // console.log(sizes.flat().sort((a,b)=>a-b))
    // let a=sizes.flat().sort((a,b)=>a-b)
    // console.log(a[sizes.length-1],a[sizes.length*2-1])
    // return a[sizes.length-1]*a[sizes.length*2-1]
    let a=sizes.map(([a,b])=>a>b?[a,b]:[b,a])
    let max=[0,0]
    a.forEach(([a,b])=>{
        if(a>max[0]) max[0]=a
        if(b>max[1]) max[1]=b
    })
    return max[0]*max[1]
    
}