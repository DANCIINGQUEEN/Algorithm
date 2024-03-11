function solution(m, s, e) {
    const arr = [...m]
    const w = [...m].slice(s, e+1).reverse()
    arr.splice(s, e - s + 1, ...w)
    return arr.join('')
}