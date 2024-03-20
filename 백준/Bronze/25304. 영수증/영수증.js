let i=require('fs').readFileSync("dev/stdin").toString().trim()
let [X,N,...s]=i.split("\n")
s=s.map(e=>e.split(" ").map(e=>+e))
let r=0
for(let [a,b] of s){
    r+=a*b
}
console.log(+X===r?'Yes':'No')