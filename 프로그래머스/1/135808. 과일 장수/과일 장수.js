function solution(k, m, score) {
    score.sort((a,b)=>b-a)
    let s=0
    for(let i=1;i<=~~(score.length/m);i++){
        s+=score[m*i-1]*m
    }
    return s
    
}