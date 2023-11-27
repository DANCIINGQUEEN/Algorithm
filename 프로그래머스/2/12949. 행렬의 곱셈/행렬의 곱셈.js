function solution(arr1,arr2){
    let a=[]
    arr1.forEach((x,i)=>{
        let b=[]
        for(let j=0;j<arr2[0].length;j++){
            let s=0
            arr2.forEach((y,k)=>{
                s+=arr1[i][k]*arr2[k][j]
            })
            b.push(s)
        }
        a.push(b)
    })
    return a
}