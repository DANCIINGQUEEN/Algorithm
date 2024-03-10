function solution(m, s) {
    return +(m.includes(s)&&m[m.length-1]===s[s.length-1])
}