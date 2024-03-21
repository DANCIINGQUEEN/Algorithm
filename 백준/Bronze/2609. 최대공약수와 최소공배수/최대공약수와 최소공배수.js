let [a,b]=require('fs').readFileSync('dev/stdin').toString().trim().split` `
function g(a,b){
    while(b!==0){
        let t=b
        b=a%b
        a=t
    }
    return a
}
function l(a,b){
    return (a*b)/g(a,b)
}
console.log(g(a,b))
console.log(l(a,b))