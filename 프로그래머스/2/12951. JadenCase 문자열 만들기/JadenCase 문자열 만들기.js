function solution(s) {
    let b=[]
    s.split` `.map(x=>b.push([...x].map((n,i)=>i===0?n.toUpperCase():n.toLowerCase()).join``))
    return b.join` `
}