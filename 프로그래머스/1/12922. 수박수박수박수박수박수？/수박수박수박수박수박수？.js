function solution(n) {
    // return n%2===0?'수박'.repeat(n/2):'수박'.repeat(~~(n/2))+'수'
    return '수박'.repeat(n/2)+(n%2?'수':'')
}