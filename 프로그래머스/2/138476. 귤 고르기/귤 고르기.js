function solution(k, tangerine){
    let obj={}
    tangerine.forEach(x=>{
        obj[x]=++obj[x]||1
    })
    let a=0, sum=0
    for (let n of Object.values(obj).sort((a,b)=>b-a)){
        a++
        sum+=n
        if(k<=sum) break
    }
    return a
}
