let [F,...l]=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`
let [K,N]=F.split` `.map(e=>+e)
l=l.map(e=>+e).sort((a,b)=>a-b)
let s=0
let e=l[l.length-1]
let a=Number.MIN_SAFE_INTEGER
while(s<=e){
    let m=Math.floor((s+e)/2)
    let c=l.reduce((a,c)=>a+Math.floor(c/m),0)
    if(c>=N) [a,s]=[m,m+1]
    else e=m-1
}
console.log(a)