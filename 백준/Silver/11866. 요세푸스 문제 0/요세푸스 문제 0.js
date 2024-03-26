let [a,b]=require('fs').readFileSync('dev/stdin').toString().trim().split` `.map(v=>+v)
function j(n,k){
    let q=[]
    let r=[]
    for(let i=1;i<=n;i++) q.push(i)
    while(q.length>=1){
        for(let i=0;i<k-1;i++){
            let a=q.shift()
            q.push(a)
        }
        r.push(q.shift())
    }
    return r
}
console.log(`<${j(a,b).join`, `}>`)