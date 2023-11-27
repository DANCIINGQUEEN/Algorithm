function solution(clothes) {
    // console.log([...new Set(clothes[])])
    // console.log([...new Set((clothes.map((x,i)=>x=x[1])))])
    let a={}
    clothes.forEach((x,i)=>{
        a[x[1]]=++a[x[1]]||1
        console.log(x)
    })
    console.log(a)
    // console.log(Object.keys(a).length)
    // console.log(Object.values(a).reduce((a,c)=>a*c,1))
    
    return Object.keys(a).length===1?clothes.length:Object.values(a).reduce((a,c)=>a*(c+1),1)-1
}