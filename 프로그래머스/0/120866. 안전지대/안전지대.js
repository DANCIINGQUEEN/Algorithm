function solution(b) {
    let o=[[-1,0],[-1,-1],[-1,1],[0,-1],[0,1],[1,0],[1,-1],[1,1]]
    let s=0
    b.forEach((r,y,self)=>r.forEach((i,x)=>{
        if(i===1) return false
        return o.some(([oy,ox])=>!!self[oy+y]?.[ox+x])?false:s++
    }))
    return s
}