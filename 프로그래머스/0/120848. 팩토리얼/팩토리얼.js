let f=n=>Array.from({length:n},(_,i)=>i+1).reduce((a,c)=>a*c,1)
function solution(n) {
    for(let i=1;i<=n;i++){
        if(f(i)==n) return i
        else if(f(i)>n) return i-1
    }
}

