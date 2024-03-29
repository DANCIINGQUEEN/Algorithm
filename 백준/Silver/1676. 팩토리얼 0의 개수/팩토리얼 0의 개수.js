let N=+require('fs').readFileSync('dev/stdin').toString().trim()
function Fac(n){
    if(n<=1) return 1n
    return BigInt(n)*Fac(n-1)
}
function Fz(n){
    let s=(n+'').split``
    let c=0
    while(true){
        let p=s.pop()
        if(p==='0'){
            c++
            continue
        }
        break
    }
    return c
}
console.log(Fz(Fac(N)))