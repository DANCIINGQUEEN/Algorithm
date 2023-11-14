function solution(price, money, count) {
    let s=0
    for(let i=1;i<=count;i++){
        s+=price*i
    }
    return s>money?s-money:0
}