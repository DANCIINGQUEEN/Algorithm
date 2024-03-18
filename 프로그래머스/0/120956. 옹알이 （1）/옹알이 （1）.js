function solution(b) {
    let p=["aya", "ye", "woo", "ma"]
    let a=0
    for(let i in b){
        let s=b[i]
        for(let j in p){
            if(b[i].includes(p[j])) s=s.replace(p[j],'X')
        }
        s=s.replace(/X/gi,'')
        if(s.length===0) a++
    }
    return a
}