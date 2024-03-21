let [_,...w]=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`
w.forEach(x=>{
    let [h,_,e]=x.split` `.map(x=>+x)
    let dh=((e-1)%h)+1
    let dw=Math.ceil(e/h)
    console.log(`${dh}${dw<10?'0'+dw:dw}`)
})