function solution(n) {
    let a=0
    for (let i=0;i<n;i++){
        a++
        while(a%3===0 || a.toString().includes('3')){
            a++
        }
    }
    return a
}