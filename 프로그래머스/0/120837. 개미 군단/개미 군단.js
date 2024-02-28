function solution(hp) {
    let a=0
    while(hp){
        if(hp>=5) hp-=5
        else if(hp>=3) hp-=3
        else if(hp>=1) hp-=1
        a++
    }
    return a
}