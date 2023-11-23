function solution(a, b, n) {
    let c=0
    while(n>=a){
        c+=~~(n/a)*b
        n=~~(n/a)*b+n%a
    }
    return c
}
