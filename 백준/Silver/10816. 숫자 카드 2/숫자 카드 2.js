let [N,a,M,b]=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`
a=a.split` `
b=b.split` `
let r=[]
let h=new Map()
a.forEach(n=>h.set(n,(h.get(n)||0)+1))
b.forEach(n=>r.push(h.get(n)||0))
console.log(r.join` `)