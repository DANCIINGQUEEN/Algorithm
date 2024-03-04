function solution(nlist,n){
    let a=[]
    let b=[]
    nlist.forEach((x,i)=>{
        b.push(x)
        if(!((i+1)%n)){
            a.push(b)
            b=[]
        }
    })
    return a
}