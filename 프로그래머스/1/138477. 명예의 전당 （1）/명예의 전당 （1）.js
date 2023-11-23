function solution(k, score) {
    let a=[], result=[]
    score.forEach(x=>{
        if(a.length<k){
            a.push(x)
            a.sort((a,b)=>b-a)
            result.push(a[a.length-1])
        }
        else if(x>=a[a.length-1]){
                a.pop()
                a.push(x)
                a.sort((a,b)=>b-a)
                result.push(a[a.length-1])
        }
        else if(x<a[a.length-1]) result.push(a[a.length-1])
    })
    return result
}