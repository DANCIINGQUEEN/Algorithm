let i=require('fs').readFileSync('dev/stdin').toString().trim().split` `.map(i=>+i)
let r=i.reduce((a,c)=>a+c**2,0)%10
console.log(r)