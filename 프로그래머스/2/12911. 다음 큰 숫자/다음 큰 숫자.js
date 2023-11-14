function solution(n) {
//     let N=n.toString(2).split`1`.length
//     let a=n+1
//     while(true){
//         a++
//         let A=a.toString(2).split`1`.length
//         if(A===N&&a>n) break
        
//     }
//     return a
    let N=n.toString(2).split`1`.length
    while(true){
        n++
        if(N===n.toString(2).split`1`.length) return n
    }
    
}