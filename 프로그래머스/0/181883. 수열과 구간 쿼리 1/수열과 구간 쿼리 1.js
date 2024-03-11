function solution(arr, q) {
    q.forEach(x=>{
        let [a,b]=x
        arr= arr.map((v,i)=>a<=i&&i<=b?v+1:v)
    })
    return arr
}