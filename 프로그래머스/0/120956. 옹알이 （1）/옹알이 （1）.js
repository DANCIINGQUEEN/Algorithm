
function solution(b) {
    let p=["aya","ye","woo","ma"]
    let pattern=new RegExp(p.join('|'),'gi')
    let a=0
    b.forEach(s=>{
        let result=s.replace(pattern,'X').replace(/X/g,'')
        if(result.length===0) a++
    })
    return a
}