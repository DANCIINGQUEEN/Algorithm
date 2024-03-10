function solution(a, b) {
    // return +(a+''+b)>2*a*b?+(a+''+b):2*a*b
    return Math.max(+(a+''+b),2*a*b)
}