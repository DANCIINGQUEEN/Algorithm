function solution(m) {
    let a=Array(52).fill(0)
    let al="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    m.split``.forEach(x=>{
        a[al.indexOf(x)]+=1
    })
    return a
}