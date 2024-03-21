let i=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`
let n=i[1].split` `.map(v=>+v)
let m=i[3].split` `.map(v=>+v)

n.sort((a,b)=>a-b)
let r=[]

m.forEach(x=>{
    let s=0
    let e=n.length-1
    let is=false
    while(s<=e){
        let mid=parseInt((s+e)/2)
        if(x<n[mid]) e=mid-1
        else if(x>n[mid]) s=mid+1
        else{ 
            is=true
            break  
        }
    }
    if(is) r.push(1)   
    else r.push(0)  
})
console.log(r.join`\n`)
