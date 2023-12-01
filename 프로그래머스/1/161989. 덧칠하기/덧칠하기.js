function solution(n, m, section) {
    let a=0, p=0
    for(let i of section){
        if(p<i){
            a++
            p=i+m-1
        }
    }
    return a
}