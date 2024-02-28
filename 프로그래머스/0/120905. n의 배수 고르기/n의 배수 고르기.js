function solution(n, num) {
    // return num.filter(x=>x%n===0)
    return num.filter(x=>!(x%n))
}