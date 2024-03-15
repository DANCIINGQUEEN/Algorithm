function solution(n, t) {
    return Array.from({length:n},(_,i)=>~~((2*t/n-(n-1))/2)+i)
}