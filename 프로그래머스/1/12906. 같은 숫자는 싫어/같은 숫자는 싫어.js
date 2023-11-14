function solution(arr)
{
    // let a=[]
    // let b
    // for(let i=0;i<arr.length;i++){
    //     b=arr[i]
    //     if(b===arr[i+1]) continue
    //     else {a.push(arr[i])}
    // }
    // console.log(a)
    // return a
    return arr.filter((x,i)=>x!=arr[i+1])
}
