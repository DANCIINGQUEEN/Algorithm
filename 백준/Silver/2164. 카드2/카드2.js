let n=+(require('fs').readFileSync('dev/stdin').toString().trim())
function s(n){
    let q=Array.from({length:n},(v,i)=>v=i+1)
    let i=0
    while(i!==q.length-1){
        if(!(i%2)) i++
        else q.push(q[i++])
    }
    return q[i]
}
console.log(s(n))