function solution(n) {
    let a=["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let s=[]
    while(n.length>0){
        for(let i of a){
            if(n.startsWith(i)) {
                s.push(a.indexOf(i))     
                n=n.slice(i.length)
            }
        }
    }
    return +s.join``
}