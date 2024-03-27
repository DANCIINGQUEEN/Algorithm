let [n,...l]=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`.map(e=>+e)
function s(n,l){
    let t=[]
    let a=''
    let c=1
    for(let i=0;i<n;i++){
        let b=l.shift()
        while(c<=b){
            t.push(c++)
            a+='+ '
        }
        let p=t.pop()
        if(p!==b) return 'NO'
        a+='- '
    }
    return a.trim()
}
console.log(s(n,l))