// function solution(n, c) {
//     let a=0
//     let s={'w':1, 's':-1, 'd':10,'a':-10}
//     c.split``.forEach(x=>{
//         a+=s[x]
//         console.log(x, a)
        
//     })
//     return a
// }
function solution(n, control) {
    return n + [...control].filter(v => v == "w").length - [...control].filter(v => v == "s").length
        + 10 * [...control].filter(v => v == "d").length - (10 * [...control].filter(v => v == "a").length);
}