function solution(t, p) {
    let b=0
    for(let i=0;i<t.length;i++){
        let a=''
        if(i===(t.length-p.length+1)) break
        for(let j=i;j<i+p.length;j++){
            a+=t[j].toString()
        }
        if(+a<=p) b++
    }
    return b
}