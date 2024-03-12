function solution(s) {
    let r=0
    let ss=s.split` `
    console.log(ss)
    ss.forEach((x,i)=>{
        if(x==='Z') {
            r-=ss[i-1]
            console.log(r,s[i-1])
        }
        else {
            r+= +x
            console.log(r)
        }
    })
    return r
}