function solution(a) {
    return [Math.max(...a), a.indexOf(Math.max(...a))]
}