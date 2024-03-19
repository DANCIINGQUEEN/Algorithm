function solution(e) {
    let a = [...e, ...e]
    let s = new Set()
    for (let i = 0; i < e.length; i++) {
        let sum = 0
        for (let j = 0; j < i; j++) sum += a[j]
        for (let j = 0; j < e.length; j++) {
            sum += a[j + i] - (j > 0 ? a[j - 1] : 0)
            s.add(sum)
        }
    }
    return s.size
}
