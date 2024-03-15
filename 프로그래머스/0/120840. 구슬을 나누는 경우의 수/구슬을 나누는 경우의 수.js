function solution(b, s) {
    let f=[BigInt(1)]
    for(let i=1;i<=b;i++) f[i]=f[i-1]*BigInt(i)
    return f[b]/(f[b-s]*f[s])
}