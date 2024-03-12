function solution(s) {
    let a=[]
    for(let i of s) if(s.indexOf(i)===s.lastIndexOf(i)) a.push(i)
    return a.sort().join``
}