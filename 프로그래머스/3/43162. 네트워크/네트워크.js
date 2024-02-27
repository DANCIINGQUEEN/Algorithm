// function solution(n, computers) {
//   let a = 0
//   const v = Array(n).fill(false)
//   function dfs(index) {
//     v[index] = true
//     for (let i=0;i<n;i++) {
//       if (computers[index][i] && !v[i]) {
//         dfs(i)
//       }
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     if (!v[i]) {
//       dfs(i)
//       a++
//     }
//   }
//   return a
// }
function solution(n, c){
    let a=0
    let v=Array(n).fill(false)
    function dfs(index){
        v[index]=true
        for(let i=0;i<n;i++){
            if(c[index][i] && !v[i]){
                dfs(i)
            }
        }
    }
    for (let i=0;i<n;i++){
        if(!v[i]){
            dfs(i)
            a++
        }
    }
    return a
}