function bs(a,t){
    let s=0
    let e=a.length-1

    while(s<=e){
        let m=parseInt((s+e)/2)
        if(t<a[m]) e=m-1
        else if(t>a[m]) s=m+1
        else return true
    }
    return false
}

let i=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`
let n=i[1].split` `.map(v=>+v)
let m=i[3].split` `.map(v=>+v)
n.sort((a,b)=>a-b)
let r=[]
m.forEach(x=>{r.push(bs(n,x)?1:0)})
console.log(r.join`\n`)