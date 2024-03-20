let [a,b]=require('fs').readFileSync('dev/stdin').toString().trim().split` `.map(i=>+i)
console.log((a+b)*(a-b))