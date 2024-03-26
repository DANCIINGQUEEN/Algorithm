let i=+require('fs').readFileSync('dev/stdin').toString().trim()
let r=1
let b=1
while(b<i){
    b+=6*r
    r++
}
console.log(r)