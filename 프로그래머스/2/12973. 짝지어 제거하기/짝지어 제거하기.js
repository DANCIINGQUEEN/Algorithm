function solution(s){
    let a=[]
    s.split``.forEach((x,i)=>(!a.length||a[a.length-1]!==x)?a.push(x):a.pop())
    return a.length?0:1
}