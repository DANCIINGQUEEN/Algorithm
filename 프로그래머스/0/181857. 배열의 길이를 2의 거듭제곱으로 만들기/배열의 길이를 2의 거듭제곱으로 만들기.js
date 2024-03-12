function solution(a) {
    return [...a, ...new Array(2**Math.ceil(Math.log2(a.length))-a.length).fill(0)]
}