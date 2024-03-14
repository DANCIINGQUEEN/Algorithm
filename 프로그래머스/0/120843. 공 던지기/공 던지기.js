function solution(n, k) {
    return n[(--k*2)%n.length]
}