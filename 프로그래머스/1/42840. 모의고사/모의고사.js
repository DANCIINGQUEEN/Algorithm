function solution(answers) {
    let s=[[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    let max=Math.max(...(s=s.map((x,i)=>answers.filter((y,j)=>y===s[i][j%s[i].length]).length)))
    return s.reduce((a,v,i)=>(v===max?[...a,i+1]:a),[]);
}