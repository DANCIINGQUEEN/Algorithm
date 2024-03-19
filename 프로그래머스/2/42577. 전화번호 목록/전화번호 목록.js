function solution(p) {
    p.sort()
    for(let i=0;i<p.length-1;i++){
        if(p[i]===p[i+1].substring(0,p[i].length)) return false
    }
    return true
}