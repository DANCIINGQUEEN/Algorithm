function solution(e) {
    let ee=[...e]
    let a=e.sort((a,b)=>b-a)
    return ee.map(x=>a.indexOf(x)+1)
}