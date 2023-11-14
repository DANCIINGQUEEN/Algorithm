function solution(x) {
    // return !(x%([...""+x].reduce((a,c)=>+a+ +c)))
    return !(x%eval([...x.toString()].join("+")))
}