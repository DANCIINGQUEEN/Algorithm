function solution(n, direction) {
    if(direction==='right'){
        let a=n.pop()
        n=[a, ...n]
    }else{
        let a=n.shift()
        n=[...n, a]
    }
    return n
}