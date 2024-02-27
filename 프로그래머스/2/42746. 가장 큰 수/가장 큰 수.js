function solution(numbers) {
    let a=numbers.map(x=>x+'').sort((a,b)=>(b+a)-(a+b)).join``
    return a[0]==='0'?'0':a
}