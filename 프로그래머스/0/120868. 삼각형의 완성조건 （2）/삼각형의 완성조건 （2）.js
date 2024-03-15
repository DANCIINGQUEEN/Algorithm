function solution(s) {
    let c=0
    s.sort((a,b)=>b-a)
    //가장 긴변이 리스트에 있는 경우
    for(let i=1;i<=s[0];i++){
        if(i+s[1]>s[0]) c++
    }
    let i=s[0]
    while(s[0]+s[1]>i){
        i++
        c++
    }
    return c-1
}