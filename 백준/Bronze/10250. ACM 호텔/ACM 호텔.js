let [q,...w]=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`
q=+q
w.forEach(x=>{
    [h,w,e]=x.split` `.map(x=>+x)
    let a=Array(h).fill(0).map((x,i)=>Array.from({length:w},(x,j)=>`${i+1}${(j+1)<10?'0'+(j+1):j+1}`))
    let dh=0
    let dw=0
    let b
    for(let i=0;i<e;i++){
        b=a[dh][dw]
        if(dh===h-1){
            dh=0
            dw++
        }
        else dh++
    }
    console.log(b)
})