let [n,...o]=require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let x=[],output=[],start=0
let ff={
    'push':(a)=>{x.push(a)},
    'pop':()=>{return start<x.length?x[start++]:-1},
    'size':()=>{return x.length-start},
    'empty':()=>{return start<x.length?0:1},
    'front':()=>{return start<x.length?x[start]:-1},
    'back':()=>{return start<x.length?x[x.length-1]:-1}
}
o.forEach(v=>{
    let [r,a]=v.split` `
    r=r.replace('\r','')
   if(r==='push')ff[r](+a)
    else output.push(ff[r]())
})
console.log(output.join`\n`)