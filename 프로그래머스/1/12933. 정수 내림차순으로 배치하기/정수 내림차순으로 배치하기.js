function solution(n) {
    return +[...(""+n)].sort((a,b)=>b-a).join``
    // [...String(n)]
    // (""+n).split``
    // [...(""+n)]
}