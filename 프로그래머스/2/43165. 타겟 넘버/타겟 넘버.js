// function solution(numbers, target) {
//     let a=0
//     dfs(0,0)
//     function dfs(i, s){
//         if(i===numbers.length){
//             if(s===target) a++
//             return
//         }
//         dfs(i+1, s+numbers[i])
//         dfs(i+1, s-numbers[i])
//     }
//     return a
// }

function solution(n, t){
    let a=0
    dfs(0, 0)
    function dfs(i, s){
        if(i===n.length){
            if(s===t) a++
            return
        }
        dfs(i+1, s+n[i])
        dfs(i+1, s-n[i])
    }
    return a
}