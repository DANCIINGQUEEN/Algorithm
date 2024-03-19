// function solution(p, s) {
//     let a=[]
//     let r=[]
//     for(let i=0;i<p.length;i++){
//         a.push(Math.ceil((100-p[i])/s[i]))
//     }
//     while(a.length>0){
//         while(a[0]>0){
//             for(let i in a){
//                 a[i]--
//             }        
//         }
//         let i=0
//         while(a[0]<=0){
//             i++
//             a.shift()
//         }
//         r.push(i)
//     }
//     return r
// }
function solution(p, s) {
    let d = p.map((x, i) => Math.ceil((100 - x) / s[i]))
    let m = d[0]
    let c = 1
    let r = []
    for (let i = 1; i < d.length; i++) {
        if (d[i] <= m) c++
        else {
            r.push(c)
            c = 1
            m = d[i]
        }
    }
    r.push(c)
    return r
}
