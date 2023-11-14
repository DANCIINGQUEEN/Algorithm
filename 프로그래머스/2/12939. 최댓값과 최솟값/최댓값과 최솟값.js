function solution(s) {
    let x=s.split` `.sort((a,b)=>a-b)
    return `${x.shift()} ${x.pop()}`
    // return `${s.split` `.sort((a,b)=>a-b).shift()} ${s.split` `.sort((a,b)=>a-b).pop()}`
    
}