let [n,...l]=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`.map(e=>+e)
function s(n,l){
    let t=[]
    let o=[]
    let c=1
    for (let i=0;i<n;i++){
        let b=l[i]
        while(c<=b){
            t.push(c++)
            o.push('+')
        }
        if (t.pop()!==b)return 'NO'
        o.push('-')
    }
    return o.join` `.trim()
}
console.log(s(n,l))