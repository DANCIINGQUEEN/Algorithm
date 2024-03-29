let [L,W]=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`
let a='abcdefghijklmnopqrstuvwxyz'
console.log([...W].reduce((x,c,i)=>x+(a.indexOf(c)+1)*31**i,0))