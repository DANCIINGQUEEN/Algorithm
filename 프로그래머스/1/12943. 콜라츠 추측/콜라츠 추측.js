function solution(num) {
    let c=0
    let n=num
    while(n!==1&&c!==500){
        n%2===0?n=n/2:n=(n*3)+1
        c++
    }
    return c>=500?-1:c
}