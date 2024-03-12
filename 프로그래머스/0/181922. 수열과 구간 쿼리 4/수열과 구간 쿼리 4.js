function solution(a, q) {
    q.forEach(([s,e,k],i)=>{
        for(let j=0;j<a.length;j++){
            if(s<=j&&j<=e&&!(j%k)) a[j]++
        }
    })
    return a
}