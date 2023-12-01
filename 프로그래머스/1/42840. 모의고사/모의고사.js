function solution(answers) {
    let s=[[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    let ss=s.map((x,i)=>x=answers.filter((y,j)=>y===s[i][j%s[i].length]).length)
    let a=[], max=Math.max(...ss)
    ss.forEach((_,i)=>ss[i]===max&&a.push(i+1))
    return a
}