let [n,...o]=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`
let x=[],output=[]
let f={
    'push_front':(a)=>{x.unshift(a)},
    'push_back':(a)=>{x.push(a)},
    'pop_front':()=>{return x.length?x.shift():-1},
    'pop_back':()=>{return x.length?x.pop():-1},
    'size':()=>{return x.length},
    'empty':()=>{return x.length?0:1},
    'front':()=>{return x.length?x[0]:-1},
    'back':()=>{return x.length?x[x.length-1]:-1}
}
o.forEach((v,i)=>{
    let [r,a]=v.split` `
    r=r.replace('\r','')
    if(r==='push_front'||r==='push_back')f[r](+a)
    else output.push(f[r]())
})
console.log(output.join`\n`)