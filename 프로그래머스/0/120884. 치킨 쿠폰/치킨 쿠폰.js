function solution(c) {
    let r=0
    while(c>=10){
        r+=~~(c/10)
        c=~~(c/10)+c%10
    }
    return r
}