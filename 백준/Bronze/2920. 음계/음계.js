let i=require('fs').readFileSync('dev/stdin').toString().trim().split` `.map(x=>+x)
function A(l){
    let a=[1,2,3,4,5,6,7,8]
    let r= l.map((x,i)=>(x-a[i])?false:true)
    return r.every(x=>x)
}
function B(l){
    let a=[8,7,6,5,4,3,2,1]
    let r= l.map((x,i)=>(x-a[i])?false:true)
    return r.every(x=>x)
}
function C(l){
    if(A(l)) console.log('ascending')
    else if(B(l)) console.log('descending')
    else console.log('mixed')
}
C(i)