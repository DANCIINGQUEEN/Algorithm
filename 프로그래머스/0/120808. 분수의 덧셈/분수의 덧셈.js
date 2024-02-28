const gcd=(a,b)=>a%b===0?b:gcd(b, a%b)
function solution(numer1, denom1, numer2, denom2) {
    let d=denom1*numer2+denom2*numer1
    let n=denom1*denom2
    let g=gcd(d, n)
    return [d/g, n/g]
}