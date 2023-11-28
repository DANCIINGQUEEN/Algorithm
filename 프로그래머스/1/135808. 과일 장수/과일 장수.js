function solution(k, m, score) {
    score.sort((a,b)=>b-a)
    for(var i=1, s=0;i<=~~(score.length/m);i++) s+=score[m*i-1]*m
    return s
    
}