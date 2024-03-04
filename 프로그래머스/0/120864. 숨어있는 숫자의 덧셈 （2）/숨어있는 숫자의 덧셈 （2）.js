function solution(m) {
    return m.replace(/[A-z]/g, " ").split` `.filter(x=>x!=='').reduce((a,c)=>a+ +c,0)
}