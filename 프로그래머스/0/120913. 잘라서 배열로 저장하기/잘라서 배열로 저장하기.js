function solution(m, n) {
    let a=m.split``
    let b=[]
    while(a.length>0){
        b.push(a.splice(0,n).join``)
    }
    return b
}