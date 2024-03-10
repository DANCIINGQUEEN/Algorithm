function solution(m, is_prefix) {
    for(let i=0;i<is_prefix.length;i++){
        if(m[i]!==is_prefix[i]) {
            return 0
            break
        }
        else continue
    }
    return 1
}