let [n, ...p] = require("fs").readFileSync("dev/stdin").toString().trim().split`\n`
for (let i = 0; i < n; i++) {
    let [N, Q] = p.shift().split` `.map(e=>+e)
    let M = p.shift().split` `.map((e, i) => [i, +e])
    let c=1
    let t=M[Q]
    while(M.length){
        let max = M[0][1]
        M.forEach(e=>{
            if(e[1]>max) max=e[1]
        })
        let s=M.shift()
        if(s[1]!==max) {
            M.push(s)
            continue
        }
        else if(t[0]===s[0]) break
        c++
    }
    console.log(c)
}
