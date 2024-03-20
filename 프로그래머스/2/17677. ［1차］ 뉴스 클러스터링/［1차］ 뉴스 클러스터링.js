function solution(s1, s2) {
    let C=65536
    let [ss1,ss2]=[m(s1),m(s2)]
    let h=new Set([...ss1,...ss2])
    if(!ss1.length&&!ss2.length) return C
    let l=g(ss1,ss2)
    return ~~(l/(ss1.length+ss2.length-l)*C)
    
}
function g(s1,s2){
    let t=[...s2]
    return s1.map(x=>{
        let i=t.indexOf(x)
        if(i>-1){
            t=t.slice(0,i).concat(t.slice(i+1))
            return true
        }
        return false
    }).filter(x=>x).length
}
function m(str) {
    str = str.toLowerCase()
    const result = []
    for(let i = 0; i < str.length - 1; i++) {
        if(isAlphabet(str[i]) && isAlphabet(str[i + 1])) {
            result.push(str[i] + str[i + 1])
        }
    }
    return result
}

function isAlphabet(ch) {
    return 97 <= ch.charCodeAt() && ch.charCodeAt() <= 122
}