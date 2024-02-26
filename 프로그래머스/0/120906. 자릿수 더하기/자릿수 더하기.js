// function solution(n) {
//     return [...String(n)].reduce((acc,cur)=>acc+parseInt(cur), 0)
// }
// const solution=n=>[...String(n)].reduce((a,c)=>a+parseInt(c), 0)
const solution=n=>[...String(n)].reduce((a,c)=>a+ +c, 0)