function solution(numbers, target) {
    let a=0
    dfs(0,0)
    function dfs(i, s){
        if(i===numbers.length){
            if(s===target) a++
            return
        }
        dfs(i+1, s+numbers[i])
        dfs(i+1, s-numbers[i])
    }
    return a
}