function solution(l){
    let q=Array(200).fill(0)
    l.forEach(([a,b])=>{for(let i=a;i<b;i++)q[100+i]+=1})
    return q.filter(x=>x>1).length
}