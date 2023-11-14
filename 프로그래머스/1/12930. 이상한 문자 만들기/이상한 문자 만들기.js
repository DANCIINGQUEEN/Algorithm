function solution(s) {
    return s.split` `.map(x=>x.split``.map((n,i)=>(i%2)?n.toLowerCase():n.toUpperCase()).join``).join` `
}