function changeArr(arr, n){
    let a= arr.map(x=>x.toString(2).split``)
    a.map(y=>{
        if(y.length<n) {
            let k=y.length
            for(let i=0;i<n-k; i++) {
                y.unshift('0')
            }
    }})
    return a
}
function solution(n, arr1, arr2) {
    let A=changeArr(arr1, n)
    let B=changeArr(arr2, n)
    return A.map((x,i)=> x.map((y,j)=>(+y)||(+B[i][j])?'#':' ').join``)
}