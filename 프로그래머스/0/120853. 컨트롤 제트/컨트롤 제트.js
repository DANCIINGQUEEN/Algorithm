function solution(s) {
    let r=0
    let ss=s.split` `
    ss.forEach((x,i)=>x==='Z'?r-=ss[i-1]:r+= +x)
    return r
}